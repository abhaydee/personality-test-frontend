import { useState, useEffect } from "react";
export const ComponentReSize = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    let checkSize = false;
    if (!checkSize) {
      updateDimensions();
      checkSize = true;
    }
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    if (window.outerWidth <= 576) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  return isMobile;
};

export let navList = [
  { id: "1", title: "Home" },
  { id: "2", title: "Take the Test" },
];
