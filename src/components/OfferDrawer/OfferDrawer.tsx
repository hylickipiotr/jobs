import {
  DeleteFilled,
  DeleteOutlined,
  FlagFilled,
  FlagOutlined,
} from "@ant-design/icons";
import { Button, Divider, Drawer, Input, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  close,
  selectIndex,
  selectIsOpen,
  selectOffer,
  updateOfferDrawer,
} from "../../lib/redux/OfferDrawer/OfferDrawer.slice";
import { getOfferMeta } from "../../utils/getOfferMeta";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

const OfferDrawer: React.FC = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);
  const offer = useSelector(selectOffer);
  const offerIndex = useSelector(selectIndex);

  const handleClose = () => {
    dispatch(close());
  };

  const handleSave = (id: string) => {
    dispatch(
      updateOfferDrawer({
        updatedValues: (currentOffer) => ({
          isSaved: !currentOffer.isSaved,
        }),
      })
    );

    // dispatch(
    //   updateOffer({
    //     id: offer.commonOfferId,
    //     index: offerIndex,
    //     updatedValues: (currentOffer) => ({
    //       isSaved: !currentOffer.isSaved,
    //     }),
    //   })
    // );
  };

  if (!offer) {
    return null;
  }

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
  } = offer;

  return (
    <Drawer
      width={660}
      placement="right"
      closable
      onClose={handleClose}
      visible={isOpen}
      title={
        <div className="flex gap-2">
          <Button
            onClick={() => handleSave(commonOfferId)}
            icon={
              isSaved ? (
                <FlagFilled className="text-blue-5" />
              ) : (
                <FlagOutlined />
              )
            }
          >
            {isSaved ? "Zapisano" : "Zapisz"}
          </Button>
          <Button
            onClick={() => handleSave(commonOfferId)}
            icon={
              isSaved ? (
                <DeleteFilled className="text-red-5" />
              ) : (
                <DeleteOutlined />
              )
            }
          >
            {isSaved ? "Zarchiwizowano" : "Zarchiwizuj"}
          </Button>
          <Button type="primary" href={offers[0].offerUrl} target="_blank">
            Pracuj.pl
          </Button>
        </div>
      }
    >
      <div>
        <div className="flex gap-4">
          <CompanyLogo src={logo} size="large" />
          <div className="flex-1">
            <Typography.Title level={5}>
              <a
                href={offers[0].offerUrl}
                target="_blank"
                className="text-gray-11 hover:text-blue-5 font-medium"
              >
                {jobTitle}
              </a>
            </Typography.Title>
            <Typography.Text type="secondary" className="mt-3">
              {employer}
            </Typography.Text>
          </div>
        </div>
        <Divider orientation="left" className="mt-8">
          <span className="text-sm font-normal text-gray-5">Opis</span>
        </Divider>
        <Typography.Text className="block">{jobDescription}</Typography.Text>
        <Divider orientation="left" className="mt-8">
          <span className="text-sm font-normal text-gray-5">Dane</span>
        </Divider>
        <div className="flex flex-col gap-4">{getOfferMeta(offer)}</div>
        <Divider orientation="left" className="mt-8">
          <span className="text-sm font-normal text-gray-5">Notatka</span>
        </Divider>
        <Input.TextArea autoSize={{ minRows: 6 }} />
        {/* <ReactQuill /> */}
      </div>
    </Drawer>
  );
};

export default OfferDrawer;
