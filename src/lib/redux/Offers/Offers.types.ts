export type OffersMeta = {
  offersTotalCount: number;
};

export type Offer = Pracuj.Offer & {
  isRead: boolean;
  isSaved: boolean;
  rating: number;
};

export type OffersState = {
  meta: OffersMeta;
  offers: Offer[];
  recommendedOffers: Pracuj.Offer[];
};
