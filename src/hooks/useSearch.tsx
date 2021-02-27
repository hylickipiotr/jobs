import { useSelector, useDispatch } from "react-redux";
import {
  clearOffers,
  setMeta,
  addOffers,
} from "../lib/redux/Offers/Offers.slice";
import {
  setSearchParams,
  setIsSearching,
  setCurrentPageLoading,
  setTotalPageCount,
} from "../lib/redux/Search/Search.slice";
import { SearchParams } from "../lib/redux/Search/Search.types";
import { PracujScrapper } from "../utils/PracujFetch";

export const useSearch = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: SearchParams) => {
    dispatch(setSearchParams(values));
    dispatch(setIsSearching(true));
    dispatch(clearOffers());

    const pracujScrapper = new PracujScrapper({
      params: {
        ...values,
      },
    });

    let currentPageNumber = 1;
    let totalPageCount = 1;

    while (currentPageNumber <= totalPageCount) {
      dispatch(setCurrentPageLoading(currentPageNumber));
      dispatch(setTotalPageCount(totalPageCount));

      const data = await pracujScrapper.scrapePage(currentPageNumber);
      if (data) {
        const { offers, pagination, offersCounts } = data;

        totalPageCount = pagination.maxPages;
        currentPageNumber = currentPageNumber + 1;

        dispatch(
          setMeta({
            offersTotalCount: offersCounts.commonOffersTotalCount,
          })
        );

        dispatch(addOffers(offers));
      }
    }

    dispatch(setIsSearching(false));
  };

  return { handleSubmit };
};
