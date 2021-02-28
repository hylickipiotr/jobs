import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reducer";
import { Offer, SearchMeta, SearchState as OffersState } from "./Offers.types";

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
    addOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = [...state.offers, ...action.payload];
    },
    toggleSave: (state, action: PayloadAction<{ id: string }>) => {
      const newOffers = state.offers.map((offer) => {
        if (offer.commonOfferId === action.payload.id) {
          return {
            ...offer,
            isSaved: !offer.isSaved,
          };
        }

        return offer;
      });

      state.offers = newOffers;
    },
  },
});

export const {
  setMeta,
  clearOffers,
  addOffers,
  toggleSave,
} = offersSlice.actions;

export const selectOffers = (state: RootState) => state.offers.offers;

export const offersReducer = offersSlice.reducer;
