import { Offer } from "../Offers/Offers.types";

export type OfferDrawerState = {
  offer?: Offer;
  index: number;
  isOpen: boolean;
};
