import { SearchOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { Form, Formik } from "formik";
import { SubmitButton, TreeSelect } from "formik-antd";
import React from "react";
import { useSelector } from "react-redux";
import { categories } from "../../constants/categories";
import { regions } from "../../constants/regions";
import { useSearch } from "../../hooks/useSearch";
import {
  selectCurrentPageLoading,
  selectIsSearching,
  selectSearchParams,
  selectTotalPageCount,
} from "../../lib/redux/Search/Search.slice";
import { filterLabelAndValue } from "../../utils/filterLabelAndValue";

const Search: React.FC = ({}) => {
  const initSearchParams = useSelector(selectSearchParams);
  const isSearching = useSelector(selectIsSearching);
  const currentPage = useSelector(selectCurrentPageLoading);
  const totalPageCount = useSelector(selectTotalPageCount);

  const { handleSubmit } = useSearch();

  const progress = (currentPage / totalPageCount) * 100;

  return (
    <div className="flex flex-col space-y-4 items-center max-w-5xl w-full">
      <Formik initialValues={initSearchParams} onSubmit={handleSubmit}>
        {() => (
          <Form className="flex w-full items-center space-x-4">
            <TreeSelect
              className="flex-1"
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
            <TreeSelect
              className="flex-grow-0 flex-shrink"
              style={{
                flexBasis: "16rem",
              }}
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
          </Form>
        )}
      </Formik>
      <Progress className="mt-2" percent={progress} showInfo={false} />
    </div>
  );
};

export default Search;
