import { Offer } from "../../redux/Offers/Offers.types";
import { BaseService } from "../base";
import { SelectQuery } from "jsstore/dist/ts/common/index";

export class OffersService extends BaseService {
  tableName: string;

  constructor() {
    super();
    this.tableName = "offers";
  }

  getOffers(query?: Omit<SelectQuery, "from">): Promise<Offer[]> {
    return this.connection.select({
      from: this.tableName,
      ...query,
    });
  }

  addOffer(offer: Partial<Offer>) {
    return this.connection.insert({
      into: this.tableName,
      values: [offer],
      return: true,
    });
  }

  getOfferById(id: string) {
    return this.connection.select({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  removeOffer(id: string) {
    return this.connection.remove({
      from: this.tableName,
      where: {
        id: id,
      },
    });
  }

  updateOfferById(id: string, updateData: Offer) {
    return this.connection.update({
      in: this.tableName,
      set: updateData,
      where: {
        id: id,
      },
    });
  }
}
