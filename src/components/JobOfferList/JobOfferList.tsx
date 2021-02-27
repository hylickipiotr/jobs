import {
  AuditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  FlagFilled,
  FlagOutlined,
  MoneyCollectOutlined,
  ThunderboltFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, List, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOffers, toggleSave } from "../../lib/redux/Offers/Offers.slice";

const IconText: React.FC<{ icon: React.FC; text: React.ReactNode }> = ({
  icon,
  text,
}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const JobOfferList: React.FC = () => {
  const dispatch = useDispatch();
  const offers = useSelector(selectOffers);

  const handleSaveClick = (id: string) => {
    dispatch(toggleSave({ id }));
  };

  return (
    <List
      className="mt-12"
      itemLayout="vertical"
      size="large"
      dataSource={offers}
      pagination={{
        defaultPageSize: 25,
        hideOnSinglePage: true,
        onChange: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      }}
      renderItem={({
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
      }) => (
        <List.Item
          key={commonOfferId}
          className="offer__meta-list border border-solid border-gray-4 my-4 rounded shadow-sm max-w-5xl"
          actions={[
            employmentLevel && (
              <IconText icon={UserOutlined} text={employmentLevel} />
            ),
            workSchedules.length && (
              <IconText icon={ClockCircleOutlined} text={workSchedules} />
            ),
            typesOfContract.length && (
              <IconText icon={AuditOutlined} text={typesOfContract} />
            ),
            salary && <IconText icon={MoneyCollectOutlined} text={salary} />,
            remoteWork && (
              <IconText icon={DesktopOutlined} text="Mozliwosc pracy zdalnej" />
            ),
            <IconText
              icon={CalendarOutlined}
              text={
                <span>Wazna do: {moment(expirationDate).format("LLL")}</span>
              }
            />,
          ].filter((action) => action)}
          extra={
            <Space direction="horizontal" size="middle">
              {/* <Rate value={0} allowClear /> */}
              <Button
                shape="circle"
                type="text"
                onClick={() => handleSaveClick(commonOfferId)}
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
            avatar={
              <Avatar
                shape={logo ? "square" : "circle"}
                className={logo || "bg-blue-5"}
                src={logo || <ThunderboltFilled className="text-white" />}
              />
            }
            title={
              <a href={offers[0].offerUrl} target="_blank">
                {jobTitle}
              </a>
            }
            description={
              <a
                className="text-gray-5"
                href={companyProfileUrl}
                target="_blank"
              >
                {employer}
              </a>
            }
          />
          {jobDescription}
        </List.Item>
      )}
    />
  );
};

export default JobOfferList;
