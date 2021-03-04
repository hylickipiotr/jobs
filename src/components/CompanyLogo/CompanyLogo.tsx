import { ThunderboltFilled } from "@ant-design/icons";
import { Avatar } from "antd";
import { AvatarSize } from "antd/lib/avatar/SizeContext";
import React from "react";

export interface CompanyLogoProps {
  src?: string;
  size?: AvatarSize;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, size = "default" }) => {
  return (
    <Avatar
      shape={src ? "square" : "circle"}
      className={src || "bg-blue-5"}
      src={src || <ThunderboltFilled className="text-white" />}
      size={size}
    />
  );
};

export default CompanyLogo;
