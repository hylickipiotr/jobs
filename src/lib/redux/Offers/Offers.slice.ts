import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorageOffer } from "../../../utils/getLocalStorageOffer";
import { saveLocalStorageOffer } from "../../../utils/saveLocalStorageOffer";
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

const offerInitValus: Pick<Offer, "isRead" | "isSaved" | "rating"> = {
  isRead: false,
  isSaved: false,
  rating: 0,
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
    addOffers: (state, action: PayloadAction<Pracuj.Offer[]>) => {
      const newOffers: Offer[] = action.payload.map((offer) => {
        const localOffer = getLocalStorageOffer(offer.commonOfferId);
        if (localOffer) {
          return localOffer;
        }

        const newOffer = {
          ...offer,
          ...offerInitValus,
        };
        saveLocalStorageOffer(newOffer);

        return newOffer;
      });

      state.offers = [...state.offers, ...newOffers];
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
