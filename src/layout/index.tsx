import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer/footer";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const isExamAttendRoute = pathname.startsWith("/exams/attend/");
  const isTakeExamRoute = pathname.startsWith("/exams/take-exam/");

  return (
    <div className="bg-gray-100">
      <main
        id="scroll-container"
        className="w-full h-[100vh] overflow-y-scroll"
      >
        {!isTakeExamRoute && (
          <div className="bg-gray-100 sticky top-0" style={{ zIndex: "9999" }}>
            <Header />
          </div>
        )}
        <Outlet />
        {!isExamAttendRoute && !isTakeExamRoute && <Footer />}
      </main>
    </div>
  );
};

export default Layout;
