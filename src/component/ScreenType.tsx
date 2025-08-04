import React, { useState, useEffect } from "react";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import Button from "./UI/Button";

const ScreenType = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  const handleFullScreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };
  return (
    <Button
      type="outline"
      splClass="text-[#3253EB] border border-[#3253EB] px-4 py-2 rounded-lg"
      handler={handleFullScreen}
    >
      {isFullScreen ? (
        <span className="flex items-center gap-2">
          <GoScreenNormal />
          Exit Full Screen
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {" "}
          <GoScreenFull />
          Full Screen
        </span>
      )}
    </Button>
  );
};

export default React.memo(ScreenType);
