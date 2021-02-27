import { Offer } from "../lib/redux/Offers/Offers.types";

export const saveLocalStorageOffer = (offer: Offer) => {
  localStorage.setItem(offer.commonOfferId, JSON.stringify(offer));
};
