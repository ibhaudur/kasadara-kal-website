import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchBoxProp } from "../types/component.types";

const SearchBox: React.FC<SearchBoxProp> = ({ placeholder, splClass }) => {
  return (
    <div className={`relative w-full ${splClass}`}>
      <FiSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full h-[48px] bg-white pl-10 pr-4 rounded-full border border-[#E3E7EA] text-sm placeholder:text-gray-400 shadow-md"
      />
    </div>
  );
};

export default SearchBox;
