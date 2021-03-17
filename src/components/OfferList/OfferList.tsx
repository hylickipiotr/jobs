import { FlagFilled, FlagOutlined } from "@ant-design/icons";
import { Button, List, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../lib/redux/OfferDrawer/OfferDrawer.slice";
import { updateOffer } from "../../lib/redux/Offers/Offers.slice";
import { Offer } from "../../lib/redux/Offers/Offers.types";
import { selectIsSearching } from "../../lib/redux/Search/Search.slice";
import { getOfferMeta } from "../../utils/getOfferMeta";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import cn from "classnames";

export interface OfferListProps {
  offers: Offer[];
}

const defaultPageSize = 25;

const getOfferIndex = (
  offerPageIndex: number,
  currentPage: number,
  pageSize: number
) => (currentPage - 1) * pageSize + offerPageIndex;

const OfferList: React.FC<OfferListProps> = ({ offers }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsSearching);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);

  const handleOfferClick = (offer: Offer) => {
    dispatch(open({ offer }));
    // If opened for min 5 secords updated isRead to true
  };

  const handleStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleSaveClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
    // index: number
  ) => {
    event.stopPropagation();
    dispatch(
      updateOffer({
        id,
        // index,
        updatedValues: (currentOffer) => ({
          isSaved: !currentOffer.isSaved,
        }),
      })
    );
  };

  const handlePaginationChange = (
    _currentPage: number,
    _pageSize: number | undefined
  ) => {
    setCurrentPage(_currentPage);
    setPageSize(_pageSize || defaultPageSize);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isLoading) {
      setCurrentPage(1);
    }
  }, [isLoading]);

  return (
    <List
      className="mt-12"
      itemLayout="vertical"
      size="large"
      dataSource={offers}
      pagination={{
        pageSize,
        defaultPageSize,
        current: currentPage,
        defaultCurrent: 1,
        showTitle: true,
        hideOnSinglePage: true,
        responsive: true,
        onChange: handlePaginationChange,
      }}
      loading={isLoading}
      rowKey={({ commonOfferId }) => commonOfferId}
      renderItem={(offer, index) => {
        const {
          commonOfferId,
          companyProfileUrl,

          jobTitle,
          jobDescription,
          offers,

          logo,
          employer,

          salary,
          remoteWork,
          employmentLevel,
          typesOfContract,
          workSchedules,

          expirationDate,
          isSaved,
          isRead,
        } = offer;

        const offerIndex = getOfferIndex(index, currentPage, pageSize);
        return (
          <List.Item
            key={commonOfferId}
            className={cn([
              "offer__meta-list border border-solid border-gray-4 my-4 rounded shadow-sm max-w-5xl",
              {
                "opacity-50": isRead,
              },
            ])}
            actions={getOfferMeta(offer)}
            onClick={() => handleOfferClick(offer)}
            extra={
              <Space direction="horizontal" size="middle">
                <Button
                  shape="circle"
                  type="text"
                  onClick={(e) => handleSaveClick(e, commonOfferId)}
                >
                  {isSaved ? (
                    <FlagFilled className="text-blue-5" />
                  ) : (
                    <FlagOutlined />
                  )}
                </Button>
              </Space>
            }
          >
            <List.Item.Meta
              avatar={<CompanyLogo src={logo} />}
              title={
                <a
                  href={offers[0].offerUrl}
                  target="_blank"
                  onClick={handleStopPropagation}
                >
                  {jobTitle}
                </a>
              }
              description={
                <a
                  href={companyProfileUrl}
                  target="_blank"
                  onClick={handleStopPropagation}
                >
                  <Typography.Text type="secondary">{employer}</Typography.Text>
                </a>
              }
            />
            {jobDescription}
          </List.Item>
        );
      }}
    />
  );
};

export default OfferList;
