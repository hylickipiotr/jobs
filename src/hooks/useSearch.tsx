import { useDispatch } from "react-redux";
import {
  clearOffers,
  setMeta,
  addOffers,
} from "../lib/redux/Offers/Offers.slice";
import { Offer } from "../lib/redux/Offers/Offers.types";
import {
  setSearchParams,
  setIsSearching,
  setCurrentPageLoading,
  setTotalPageCount,
} from "../lib/redux/Search/Search.slice";
import { SearchParams } from "../lib/redux/Search/Search.types";
import { OffersService } from "../lib/storage-service/Offers/offers.service";
import { formatNewOffer } from "../utils/formatNewOffer";
import { PracujScrapper } from "../utils/PracujFetch";

export const useSearch = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: SearchParams) => {
    dispatch(setSearchParams(values));
    dispatch(setIsSearching(true));
    dispatch(clearOffers());
    const offersService = new OffersService();

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

        /** Updating offers total count */
        dispatch(
          setMeta({
            offersTotalCount: offersCounts.commonOffersTotalCount,
          })
        );

        const mappedOffers = offers.map((offer) => {
          const formatedOffer = formatNewOffer(offer);
          offersService.addOffer(formatedOffer);
          return formatedOffer;
        });

        dispatch(addOffers(mappedOffers));
      }
    }

    dispatch(setIsSearching(false));

    const offers = (await offersService.getOffers({
      where: {
        expirationDate: {
          "<=": new Date(),
        },
      },
      order: {
        by: "expirationDate",
        type: "desc",
      },
    })) as Offer[];

    dispatch(addOffers(offers));
  };

  return { handleSubmit };
};
