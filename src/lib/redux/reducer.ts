import { combineReducers, Selector } from "@reduxjs/toolkit";
import { offerDrawerReducer } from "./OfferDrawer/OfferDrawer.slice";
import { offersReducer } from "./Offers/Offers.slice";
import { searchReducer } from "./Search/Search.slice";

export const rootReducer = combineReducers({
  search: searchReducer,
  offers: offersReducer,
  offerDrawer: offerDrawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootStateSelector<R> = Selector<RootState, R>;
