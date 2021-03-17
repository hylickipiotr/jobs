import { Offer } from "../lib/redux/Offers/Offers.types";

export const formatNewOffers = (
  offers: Pracuj.Offer[],
  afterFormat?: (newOffer: Offer) => void
): Offer[] => {
  const newOffers = offers.map((offer) => {
    const newOffer: Offer = {
      ...offer,
      expirationDate: new Date(offer.expirationDate),
      lastPublicated: new Date(offer.lastPublicated),
      remoteWork: offer.remoteWork === "" || !offer.remoteWork ? false : true,
      isRead: false,
      isSaved: false,
      rating: 0,
    };

    if (afterFormat) {
      afterFormat(newOffer);
    }
    return newOffer;
  });

  return newOffers;
};
