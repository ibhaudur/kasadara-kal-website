import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";

// Define which routes need login
const protectedRoutes = ["/exams", "/dashboard", "/your-exams"];

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const userDetails = useSelector((state: any) => state.user.userDetails);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    if (!userDetails?.name && protectedRoutes.some(route => path.startsWith(route))) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location, userDetails]);

  return (
    <>
      {children}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
