import { Offer } from "../lib/redux/Offers/Offers.types";

export const formatNewOffer = (offer: Pracuj.Offer): Offer => ({
  ...offer,
  isRead: false,
  isSaved: false,
  rating: 0,
});
