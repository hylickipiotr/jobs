export enum SearchStatus {
  GETTING_METADATA = "GETTING_METADATA",
  SCAPING = "SCAPING",
  COMPLETE = "COMPLETE",
}

export type SearchMeta = {
  offersTotalCount: number;
};

export type SearchState = {
  meta: SearchMeta;
  offers: Pracuj.Offer[];
  recommendedOffers: Pracuj.Offer[];
};
