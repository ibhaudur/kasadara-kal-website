import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/images/logo.png";
import logo2 from "../../../public/images/logo2.png";
import mobileHamburger from "../../../public/images/mobile-hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../utils/utils";
import Login from "./login";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../component/UI/Button";
import { clearUser } from "../../store/slice/userSlice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showMobileSearch, setShowMobileSearch] = useState(false);
  const userDetails = useSelector((state: any) => state.user.userDetails);
  const profileRoute = RoutesList.find((route) => route.name === "Profile");
  const [showPopup, setShowPopup] = useState(false);

  const avatarRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const togglePopup = () => setShowPopup((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* <button
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
          </button> */}
          {userDetails?.name && profileRoute?.icon ? (
            <>
              {" "}
              <div
                ref={avatarRef}
                onClick={togglePopup}
                className="text-[#21272C] w-9 h-9 cursor-pointer flex items-center justify-center bg-[#BFFFE3] font-medium text-[15px] rounded-4xl"
              >
                <p className="font-bold">{userDetails?.name?.charAt(0)}</p>
              </div>
              {showPopup && (
                <div
                  ref={popupRef}
                  className="fixed top-14 right-6 z-40 bg-[#2BBC7C] shadow-lg rounded-2xl w-60 flex items-center justify-center"
                >
                  <div className="bg-white mt-14 rounded-2xl p-3 pt-8 pb-4 flex flex-col items-center relative w-full">
                    <div className="absolute top-[-25px] bg-white flex justify-center items-center cursor-pointer border border-[#2BBC7C] rounded-full w-14 h-14">
                      <p className="text-[#2C8C53] mb-0 text-3xl font-extrabold">
                        {userDetails?.name?.charAt(0)}
                      </p>
                    </div>
                    <p className="text-sm text-gray-800 mt-4 text-center font-semibold">
                      {userDetails?.name}
                    </p>
                    <small className="text-[#8790A1] text-xs">
                      {userDetails?.email}
                    </small>
                    <Button
                      btnName="Logout"
                      splClass="rounded-[60px] py-1 px-6 mt-3"
                      type="outline"
                      handler={() => {
                        dispatch(clearUser());
                        togglePopup();
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>

      {/* {showMobileSearch && (
        <div className="sm:hidden mt-2">
          <SearchBox
            splClass="w-full"
            placeholder="Search exams, mock test  & etc..."
          />
        </div>
      )} */}

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
            (item, index) => {
              if (item.protect && !userDetails?.name) return null;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className="p-4 text-[15px] font-medium text-[#21272C]"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="block">{item.name}</span>
                </NavLink>
              );
            }
          )}
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="hidden sm:flex flex-row justify-between items-center w-full gap-0">
        <div className="flex items-center w-auto">
          <img
            src={Logo}
            width={120}
            className="cursor-pointer"
            onClick={() => navigate("/")}
            alt="icon"
          />
        </div>
        {/* <div className="w-auto">
          <SearchBox
            splClass="max-w-full sm:max-w-[320px]"
            placeholder="Search exams, mock test  & etc..."
          />
        </div> */}
        <div className="flex flex-row items-center gap-0 w-auto mt-0">
          {showPopup && (
            <div
              ref={popupRef}
              className="fixed top-14 right-6 z-40 bg-[#2BBC7C] shadow-lg rounded-2xl w-60 flex items-center justify-center"
            >
              <div className="bg-white mt-14 rounded-2xl p-3 pt-8 pb-4 flex flex-col items-center relative w-full">
                <div className="absolute top-[-25px] bg-white flex justify-center items-center cursor-pointer border border-[#2BBC7C] rounded-full w-14 h-14">
                  <p className="text-[#2C8C53] mb-0 text-3xl font-extrabold">
                    {userDetails?.name?.charAt(0)}
                  </p>
                </div>
                <p className="text-sm text-gray-800 mt-4 text-center font-semibold">
                  {userDetails?.name}
                </p>
                <small className="text-[#8790A1] text-xs">
                  {userDetails?.email}
                </small>
                <Button
                  btnName="Logout"
                  splClass="rounded-[60px] py-1 px-6 mt-3"
                  type="outline"
                  handler={() => {
                    dispatch(clearUser());
                    togglePopup();
                  }}
                />
              </div>
            </div>
          )}
          {RoutesList.map((item, index) => {
            if (item.protect && !userDetails?.name) return null;
            return (
              <React.Fragment key={index}>
                {item.name === "Profile" ? (
                  userDetails?.name ? (
                    <div
                      ref={avatarRef}
                      onClick={togglePopup}
                      className="text-[#21272C] w-9 h-9 cursor-pointer flex items-center justify-center bg-[#BFFFE3] font-medium text-[15px] rounded-4xl"
                    >
                      <p className="font-bold">
                        {userDetails?.name?.charAt(0)}
                      </p>
                    </div>
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
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
