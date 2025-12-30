import { useEffect, useState } from "react";
import adImage from "../../public/images/popup-banner.jpeg";

const AD_STORAGE_KEY = "daily_ad_shown_date";

const getTodayDate = () => new Date().toISOString().split("T")[0];

const AdPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem(AD_STORAGE_KEY);
    if (lastShownDate !== getTodayDate()) {
      setShow(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem(AD_STORAGE_KEY, getTodayDate());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-4">
      {/* Image Wrapper */}
      <div className="relative w-md md:max-w-xs">
        {/* Close Button on Image */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full text-xs bg-[#ce423b] text-white hover:bg-black"
        >
          ✕
        </button>

        {/* Ad Image */}
        <a
          href="https://t.me/kasadara_kal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={adImage}
            alt="Advertisement"
            className="w-full rounded-lg object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default AdPopup;
