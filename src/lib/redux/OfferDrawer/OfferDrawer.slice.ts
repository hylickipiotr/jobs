import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer } from "../Offers/Offers.types";
import { RootState } from "../reducer";
import { OfferDrawerState } from "./OfferDrawer.types";

export const initialState: OfferDrawerState = {
  isOpen: false,
  index: 0,
};

export const offerDrawerSlice = createSlice({
  name: "offerDrawer",
  initialState,
  reducers: {
    open: (
      state,
      action: PayloadAction<Required<Pick<OfferDrawerState, "offer" | "index">>>
    ) => {
      state.isOpen = true;
      state.offer = action.payload.offer;
      state.index = action.payload.index;
    },
    close: (state) => {
      state.isOpen = false;
      state.offer = undefined;
      state.index = 0;
    },
    updateOfferDrawer: (
      state,
      action: PayloadAction<{
        updatedValues: Partial<Offer> | ((offer: Offer) => Partial<Offer>);
      }>
    ) => {
      if (!state.offer) return;

      const { updatedValues } = action.payload;

      const newOffer = {
        ...state.offer,
        ...(typeof updatedValues === "function"
          ? updatedValues(state.offer)
          : updatedValues),
      };
      state.offer = newOffer;
    },
  },
});

export const { open, close, updateOfferDrawer } = offerDrawerSlice.actions;

export const selectIsOpen = (state: RootState) => state.offerDrawer.isOpen;

export const selectOffer = (state: RootState) => state.offerDrawer.offer;

export const selectIndex = (state: RootState) => state.offerDrawer.index;

export const offerDrawerReducer = offerDrawerSlice.reducer;
