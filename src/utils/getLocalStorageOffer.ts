import { Offer } from "../lib/redux/Offers/Offers.types";

export const getLocalStorageOffer = (id: string): Offer | undefined => {
  const localItem = localStorage.getItem(id);
  if (!localItem) {
    return undefined;
  }
  const offer: Offer = JSON.parse(localItem);
  return offer;
};
