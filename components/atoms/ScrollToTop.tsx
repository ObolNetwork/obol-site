import { ChevronUpIcon } from "@obolnetwork/obol-ui";
import React, { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      if (
        bodyHeight - (scrollPosition + windowHeight) < 20 &&
        scrollPosition > 100
      ) {
        setShowScrollButton(false);
      } else if (scrollPosition > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            background: "#224737",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          title="Scroll To Top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </>
  );
};
