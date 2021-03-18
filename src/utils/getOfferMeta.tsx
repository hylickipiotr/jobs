import {
  AuditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import React from "react";
import IconText from "../components/IconText/IconText";
import { Offer } from "../lib/redux/Offers/Offers.types";

export type MetaValue =
  | string
  | number
  | Array<string | number>
  | React.ReactNode;

export type MetaItem = {
  icon: React.ReactNode;
  value: MetaValue;
  key: string;
  format?: (value: any) => React.ReactNode;
};

export const getOfferMeta = (offer: Offer): React.ReactNode[] => {
  const {
    employmentLevel,
    workSchedules,
    typesOfContract,
    salary,
    remoteWork,
    expirationDate,
  } = offer;

  const items: MetaItem[] = [
    {
      key: "emplymentLevel",
      icon: <UserOutlined />,
      value: employmentLevel,
    },
    {
      key: "workSchedules",
      icon: <ClockCircleOutlined />,
      value: workSchedules,
      format: (value: typeof workSchedules) => value.join(" / "),
    },
    {
      key: "typesOfContract",
      icon: <AuditOutlined />,
      value: typesOfContract,
      format: (value: typeof typesOfContract) => value.join(" / "),
    },
    {
      key: "salary",
      icon: <MoneyCollectOutlined />,
      value: salary,
    },
    {
      key: "remoteWork",
      icon: <DesktopOutlined />,
      value: remoteWork,
      format: () => "Mozliwosc pracy zdalnej",
    },
    {
      key: "expirationDate",
      icon: <CalendarOutlined />,
      value: expirationDate,
      format: (value: Date) => (
        <span>
          Wygasa {moment(value).format("LL")}r. o {moment(value).format("LT")}
        </span>
      ),
    },
  ];

  const filteredItems = items.filter(({ value }) =>
    Array.isArray(value) ? value.length : !!value
  );

  return filteredItems.map(({ key, icon, value, format }) => (
    <IconText key={key} icon={icon} text={format ? format(value) : value} />
  ));
};
