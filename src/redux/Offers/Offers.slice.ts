import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState } from "../reducer";
import { SearchMeta, SearchState as OffersState } from "./Offers.types";

export const initialState: OffersState = {
  meta: {
    offersTotalCount: 0,
  },
  offers: [],
  recommendedOffers: [],
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setMeta: (state, action: PayloadAction<SearchMeta>) => {
      state.meta = action.payload;
    },
    clearOffers: (state) => {
      state.offers = [];
    },
    addOffers: (state, action: PayloadAction<Pracuj.Offer[]>) => {
      state.offers = [...state.offers, ...action.payload];
    },
  },
});

export const { setMeta, clearOffers, addOffers } = offersSlice.actions;

export const selectOffers = (state: RootState) => state.offers.offers;

export const offersReducer = offersSlice.reducer;
