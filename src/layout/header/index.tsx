import React, { useState } from "react";
import Logo from "../../../public/images/logo.svg";
import logo2 from "../../../public/images/logo2.png";
import mobileHamburger from "../../../public/images/mobile-hamburger.png";
import SearchBox from "../../component/SearchBox";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../utils/utils";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const profileRoute = RoutesList.find(route => route.name === "Profile");

  return (
    <header className="bg-white w-full border-b border-b-[#EBEBEB] p-3">
      {/* Mobile Header */}
      <div className="flex items-center w-full sm:hidden">
        {/* Hamburger */}
        <button
          className="p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {/* Mobile hamburger for <= 360px */}
          <img 
            src={mobileHamburger} 
            width={20} 
            height={20} 
            alt="menu"
            className="max-[360px]:block hidden"
          />
          
          <svg 
            width="28" 
            height="28" 
            fill="none" 
            viewBox="0 0 24 24"
            className="min-[361px]:block hidden"
          >
            <path stroke="#21272C" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
       
        <div className="ml-2">
         
          <img 
            src={logo2} 
            width={24} 
            alt="icon"
            className="max-[360px]:block hidden" 
          />
          
          <img 
            src={Logo} 
            width={90} 
            alt="icon"
            className="min-[361px]:block hidden" 
          />
        </div>
        
        <div className="flex-1" />
       
        <div className="flex items-center">
          <button
            className="p-2"
            onClick={() => setShowMobileSearch((prev) => !prev)}
            aria-label="Show search"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#21272C" strokeWidth="2"/>
              <path stroke="#21272C" strokeWidth="2" strokeLinecap="round" d="M20 20l-3-3"/>
            </svg>
          </button>
          {profileRoute?.icon && (
            <NavLink to="/profile" className="p-2">
              <img 
                src={profileRoute.icon} 
                alt="Profile"
                className="w-7 h-7 rounded-full" 
              />
            </NavLink>
          )}
        </div>
      </div>

   
      {showMobileSearch && (
        <div className="sm:hidden mt-2">
          <SearchBox
            splClass="w-full"
            placeholder="Search exams, mock test  & etc..."
          />
        </div>
      )}

      <div
        className={`
          flex-col ${menuOpen ? "flex" : "hidden"} sm:hidden
          w-full mt-2
        `}
      >
        {RoutesList.filter(item => item.name !== "Profile").map((item, index) => (
          <NavLink
            className="p-3 text-[#21272C] font-medium text-[15px] block"
            key={index}
            to={item.path}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop Header */}
      <div className="hidden sm:flex flex-row justify-between items-center w-full gap-0">
        <div className="flex items-center w-auto">
          <img src={Logo} width={120} className="" alt="icon" />
        </div>
        <div className="w-auto">
          <SearchBox
            splClass="max-w-full sm:max-w-[320px]"
            placeholder="Search exams, mock test  & etc..."
          />
        </div>
        <div className="flex flex-row items-center gap-0 w-auto mt-0">
          {RoutesList.map((item, index) => (
            <NavLink
              className="p-3 text-[#21272C] font-medium text-[15px] block sm:inline"
              key={index}
              to={item.path}
            >
              {item.icon ? (
                <img src={item.icon} alt="" />
              ) : (
                <span>{item.name}</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;