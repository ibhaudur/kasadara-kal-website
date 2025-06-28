import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchBoxProp } from "../types/component.types";

const SearchBox: React.FC<SearchBoxProp> = ({ placeholder, splClass }) => {
  return (
    <div className={`relative w-100 ${splClass}`}>
      <FiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search..."}
        className="w-full h-[40px] bg-white pl-10 pr-4 rounded-[50px] border-[0.6px] border-[#DCDFE4] text-sm"
      />
    </div>
  );
};

export default SearchBox;
