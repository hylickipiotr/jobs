import React from "react";

export interface IconTextProps {
  icon: React.ReactNode;
  text: React.ReactNode;
}

const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    {text}
  </div>
);

export default IconText;
