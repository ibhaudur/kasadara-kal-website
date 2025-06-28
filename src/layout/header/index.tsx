import React from "react";
import Logo from "../../../public/images/logo.svg";
import SearchBox from "../../component/SearchBox";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../utils/utils";

const Header: React.FC = () => {
  return (
    <header className="bg-white flex justify-between items-center w-full p-3">
      <img src={Logo} width={150} className="" alt="icon" />
      <SearchBox placeholder="Search exams, mock test  & etc..." />
      <div>
        {RoutesList.map((item, index) => {
          return (
            <NavLink
              className="p-3 text-[#21272C] font-medium text-[15px]"
              key={index}
              to={item.path}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
