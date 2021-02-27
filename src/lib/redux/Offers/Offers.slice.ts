import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorageOffer } from "../../../utils/getLocalStorageOffer";
import { saveLocalStorageOffer } from "../../../utils/saveLocalStorageOffer";
import { updateLocalStorageOffer } from "../../../utils/updateLocalStorageOffer";
import { RootState } from "../reducer";
import { Offer, SearchMeta, SearchState as OffersState } from "./Offers.types";

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
    setMeta: (state, action: PayloadAction<SearchMeta>) => {
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

      updateLocalStorageOffer(action.payload.id, (offer) => {
        const newOffer: Offer = {
          ...offer,
          isSaved: !offer.isSaved,
        };

        return newOffer;
      });
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
