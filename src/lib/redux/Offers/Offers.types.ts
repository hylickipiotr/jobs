export enum SearchStatus {
  GETTING_METADATA = "GETTING_METADATA",
  SCAPING = "SCAPING",
  COMPLETE = "COMPLETE",
}

export type SearchMeta = {
  offersTotalCount: number;
};

export type Offer = Pracuj.Offer & {
  isRead: boolean;
  isSaved: boolean;
  rating: number;
};
export type SearchState = {
  meta: SearchMeta;
  offers: Offer[];
  recommendedOffers: Pracuj.Offer[];
};
