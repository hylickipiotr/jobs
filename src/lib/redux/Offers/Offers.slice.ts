import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reducer";
import { Offer, OffersMeta, OffersState } from "./Offers.types";

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
    setMeta: (state, action: PayloadAction<OffersMeta>) => {
      state.meta = action.payload;
    },
    clearOffers: (state) => {
      state.offers = [];
    },
    addOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = [...state.offers, ...action.payload];
    },
    // updateOffer: (
    //   state,
    //   action: PayloadAction<{
    //     id: string;
    //     updatedValues: Partial<Offer> | ((offer: Offer) => Partial<Offer>);
    //   }>
    // ) => {
    // const { id, updatedValues } = action.payload;
    // const newOffer = {
    //   ...currentOffer,
    //   ...(typeof updatedValues === "function"
    //     ? updatedValues(currentOffer)
    //     : updatedValues),
    // };
    // state.offers[index] = newOffer;
    // // Update offer
    // },
  },
});

export const { setMeta, clearOffers, addOffers } = offersSlice.actions;

export const selectOffers = (state: RootState) => state.offers.offers;

export const offersReducer = offersSlice.reducer;
