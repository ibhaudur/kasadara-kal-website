import React, { useState, useEffect } from "react";
import Logo from "../../../public/images/logo.svg";
import logo2 from "../../../public/images/logo2.png";
import mobileHamburger from "../../../public/images/mobile-hamburger.png";
import SearchBox from "../../component/SearchBox";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../utils/utils";
import Login from "./login";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const userDetails = useSelector((state: any) => state.user.userDetails);
  const profileRoute = RoutesList.find((route) => route.name === "Profile");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="bg-white w-full border-b border-b-[#EBEBEB] p-3 relative z-50">
      {/* Mobile Header */}
      <div className="flex items-center w-full sm:hidden">
        {/* Hamburger */}
        <button
          className="p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle navigation"
        >
          <img
            src={mobileHamburger}
            width={20}
            height={20}
            alt="menu"
            className="block"
          />
        </button>

        <div className="ml-2">
          <img src={logo2} width={24} alt="icon" />
        </div>

        <div className="flex-1" />

        <div className="flex items-center">
          <button
            className="p-2"
            onClick={() => setShowMobileSearch((prev) => !prev)}
            aria-label="Show search"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#21272C" strokeWidth="2" />
              <path
                stroke="#21272C"
                strokeWidth="2"
                strokeLinecap="round"
                d="M20 20l-3-3"
              />
            </svg>
          </button>
          {userDetails?.name && profileRoute?.icon ? (
            <NavLink to="/profile" className="p-2">
              <img
                src={profileRoute.icon}
                alt="Profile"
                className="w-7 h-7 rounded-full"
              />
            </NavLink>
          ) : (
            <Login />
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

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg transition-transform duration-300 z-50 sm:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-2 border-b border-[#EBEBEB]">
          <img src={Logo} width={150} alt="icon" />
        </div>
        <nav className="flex mobile mt-3 flex-col">
          {RoutesList.filter((item) => item.name !== "Profile").map(
            (item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="p-4 text-[15px] font-medium text-[#21272C]"
                onClick={() => setMenuOpen(false)}
              >
                <span className="block">{item.name}</span>
              </NavLink>
            )
          )}
        </nav>
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
            <React.Fragment key={index}>
              {item.name === "Profile" ? (
                userDetails?.name ? (
                  <NavLink
                    to={item.path}
                    className="p-3 text-[#21272C] font-medium text-[15px] block sm:inline"
                  >
                    <img
                      src={item.icon}
                      alt="Profile"
                      className="w-7 h-7 rounded-full"
                    />
                  </NavLink>
                ) : (
                  <Login />
                )
              ) : (
                <NavLink
                  to={item.path}
                  className="p-3 text-[#21272C] font-medium text-[15px] block sm:inline"
                >
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
