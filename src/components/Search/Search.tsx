import { SearchOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { SubmitButton } from "formik-antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../constants/categories";
import { regions } from "../../constants/regions";
import {
  addOffers,
  clearOffers,
  setMeta,
} from "../../redux/Offers/Offers.slice";
import {
  selectIsSearching,
  setSearchParams,
  setIsSearching,
  selectSearchParams,
  setCurrentPageLoading,
  setTotalPageCount,
} from "../../redux/Search/Search.slice";
import { SearchParams } from "../../redux/Search/Search.types";
import { filterLabelAndValue } from "../../utils/filterLabelAndValue";
import { PracujScrapper } from "../../utils/PracujFetch";
import {
  StyledCategoriesTreeSelect,
  StyledForm,
  StyledRegionTreeSelect,
} from "./Search.styles";

const Search: React.FC = ({}) => {
  const initSearchParams = useSelector(selectSearchParams);
  const isSearching = useSelector(selectIsSearching);
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
      console.log("SCAPING PAGE NR", currentPageNumber);
      console.log("TOTAL PAGE", totalPageCount);
      dispatch(setCurrentPageLoading(currentPageNumber));
      dispatch(setTotalPageCount(totalPageCount));

      const data = await pracujScrapper.scrapePage();
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
  return (
    <Formik initialValues={initSearchParams} onSubmit={handleSubmit}>
      {() => (
        <StyledForm>
          <StyledCategoriesTreeSelect
            name="category"
            size="large"
            treeData={categories}
            placeholder="Jaką kategorią pracy jesteś zainteresownay?"
            treeCheckable
            showCheckedStrategy={"SHOW_ALL"}
            filterTreeNode={filterLabelAndValue}
            treeDefaultExpandAll
            allowClear
            showArrow
          />
          <StyledRegionTreeSelect
            name="region"
            size="large"
            treeData={regions}
            placeholder="Lokalizacja"
            treeCheckable
            showCheckedStrategy={"SHOW_ALL"}
            filterTreeNode={filterLabelAndValue}
            treeDefaultExpandAll
            allowClear
            showArrow
          />
          <SubmitButton
            type="primary"
            size="large"
            loading={isSearching}
            icon={<SearchOutlined />}
          >
            {!isSearching ? "Wyszukaj" : "Wyszukuję"}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Search;
