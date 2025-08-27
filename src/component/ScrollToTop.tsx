import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // use "instant" if you don’t want animation
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
