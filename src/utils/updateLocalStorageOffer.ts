import { Offer } from "../lib/redux/Offers/Offers.types";
import { getLocalStorageOffer } from "./getLocalStorageOffer";
import { saveLocalStorageOffer } from "./saveLocalStorageOffer";

export type UpdateLocalStorageOffer = (
  id: string,
  cb: (offer: Offer) => Offer
) => Offer;

export const updateLocalStorageOffer: UpdateLocalStorageOffer = (id, cb) => {
  const localOffer = getLocalStorageOffer(id);
  if (!localOffer) {
    throw new Error(`Offer ${id} not exist in local storage!`);
  }
  const updatedOffer = cb(localOffer);
  saveLocalStorageOffer(updatedOffer);
  return updatedOffer;
};
