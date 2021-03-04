import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateLocalStorageOffer } from "../../../utils/updateLocalStorageOffer";
import { RootState } from "../reducer";
import { Offer, OffersMeta, OffersState as OffersState } from "./Offers.types";

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
    updateOffer: (
      state,
      action: PayloadAction<{
        id: string;
        index: number;
        updatedValues: Partial<Offer> | ((offer: Offer) => Partial<Offer>);
      }>
    ) => {
      const { id, index, updatedValues } = action.payload;
      const currentOffer = state.offers[index];
      const newOffer = {
        ...currentOffer,
        ...(typeof updatedValues === "function"
          ? updatedValues(currentOffer)
          : updatedValues),
      };

      state.offers[index] = newOffer;

      updateLocalStorageOffer(id, () => newOffer);
    },
  },
});

export const {
  setMeta,
  clearOffers,
  addOffers,
  updateOffer,
} = offersSlice.actions;

export const selectOffers = (state: RootState) => state.offers.offers;

export const offersReducer = offersSlice.reducer;
