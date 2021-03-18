import { SelectQuery } from "jsstore/dist/ts/common/index";
import { Offer } from "../../redux/Offers/Offers.types";
import { BaseService } from "../base";

export type OfferWhere = Record<keyof Offer, unknown>;
export interface DbOffer
  extends Omit<Offer, "lastPublicated" | "expirationDate"> {
  lastPublicated: Date;
  expirationDate: Date;
}
export class OffersService extends BaseService {
  tableName: string;

  constructor() {
    super();
    this.tableName = "offers";
  }

  /** Format the offer to jsstore the database type */
  private formatOffer = ({
    lastPublicated,
    expirationDate,
    ...offer
  }: Offer): DbOffer => ({
    ...offer,
    lastPublicated: new Date(lastPublicated),
    expirationDate: new Date(expirationDate),
  });

  /** Format the jsstore database offer to the global type */
  private foramtDbOffer = ({
    lastPublicated,
    expirationDate,
    ...offer
  }: DbOffer): Offer => ({
    ...offer,
    lastPublicated: lastPublicated.toISOString(),
    expirationDate: expirationDate.toISOString(),
  });

  /** Format jsstore database offers to the global type */
  private foramtDbOffers = (offers: DbOffer[]): Offer[] =>
    offers.map(this.foramtDbOffer);

  /** Get offer */
  async getOffers(query?: Omit<SelectQuery, "from">): Promise<Offer[]> {
    const offers = await this.connection.select<DbOffer>({
      from: this.tableName,
      ...query,
    });
    return this.foramtDbOffers(offers);
  }

  /** Get offer by id */
  async getOfferById(id: string): Promise<Offer | null> {
    const offer = await this.connection.select<Offer>({
      from: this.tableName,
      where: {
        commonOfferId: id,
      } as OfferWhere,
    });

    if (!offer.length) {
      return null;
    }

    return offer[0];
  }

  /** Add offer */
  async addOffer(offer: Offer) {
    const { commonOfferId } = offer;
    const formatedOffer = this.formatOffer(offer);
    const duplicated = await this.getOfferById(commonOfferId);
    if (duplicated) {
      const addedOffer = await this.connection.update({
        in: this.tableName,
        set: formatedOffer,
        where: {
          commonOfferId,
        } as OfferWhere,
      });
      return addedOffer;
    }

    const addedOffer = await this.connection.insert({
      into: this.tableName,
      values: [formatedOffer],
      return: true,
    });

    return addedOffer;
  }

  /** Add bulk offers */
  async addOffers(offers: Offer[]) {
    return offers.map(async (offer) => {
      const addedOffer = await this.addOffer(offer);
      return addedOffer;
    });
  }

  /** Remove offer by id */
  async removeOffer(id: string) {
    await this.connection.remove({
      from: this.tableName,
      where: {
        commonOfferId: id,
      } as OfferWhere,
    });
  }

  /** Update offer by id */
  async updateOfferById(id: string, updatedData: Offer) {
    await this.connection.update({
      in: this.tableName,
      set: updatedData,
      where: {
        commonOfferId: id,
      } as OfferWhere,
    });
  }
}
