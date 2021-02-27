import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reducer";
import { SearchParams, SearchState, SearchStatus } from "./Search.types";

export const initialState: SearchState = {
  params: {
    category: [],
    region: [],
    rangeDistance: 30,
  },
  isSearching: false,
  status: null,
  currentPageLoading: 0,
  toatalPageCount: 0,
};

export const saerchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.params = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    setStatus: (state, action: PayloadAction<SearchStatus>) => {
      state.status = action.payload;
    },
    setCurrentPageLoading: (state, action: PayloadAction<number>) => {
      state.currentPageLoading = action.payload;
    },
    setTotalPageCount: (state, action: PayloadAction<number>) => {
      state.toatalPageCount = action.payload;
    },
  },
});

export const {
  setSearchParams,
  setIsSearching,
  setStatus,
  setCurrentPageLoading,
  setTotalPageCount,
} = saerchSlice.actions;

export const selectSearchParams = (state: RootState) => state.search.params;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectIsSearching = (state: RootState) => state.search.isSearching;
export const selectCurrentPageLoading = (state: RootState) =>
  state.search.currentPageLoading;
export const selectTotalPageCount = (state: RootState) =>
  state.search.toatalPageCount;

export const searchReducer = saerchSlice.reducer;
