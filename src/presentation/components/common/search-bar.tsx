import { Input } from "antd";
import React, { FC } from "react";
import SearchIcon from "../../static/search-icon.svg";

export const SearchBar: FC<SearchBarProps> = ({ placeholder, className }) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      suffix={<img src={SearchIcon} />}
      className={`border-none ${className}`}
    />
  );
};

type SearchBarProps = {
  placeholder?: string;
  className?: string;
};
