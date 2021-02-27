export enum SearchStatus {
  GETTING_METADATA = "GETTING_METADATA",
  SCAPING = "SCAPING",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
}

export type SearchParams = {
  category: string[];
  region: string[];
  rangeDistance: number;
};

export type SearchState = {
  params: SearchParams;
  isSearching: boolean;
  status: SearchStatus | null;
  currentPageLoading: number;
  toatalPageCount: number;
};
