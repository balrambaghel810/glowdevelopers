import React, { useEffect, useState, useRef } from "react";
import chat from "../assets/chatIcon.png";

const ChatButton = () => {
  const [offset, setOffset] = useState(10);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Move the button same px as scroll
      setOffset(scrollY);

      // Clear last timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Return slowly after user stops scrolling
      timeoutRef.current = setTimeout(() => {
        setOffset(10);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // 🔥 WhatsApp open function
  const openWhatsApp = () => {
    window.open("https://wa.me/9977810861", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}  // 👈 Add this line
      className="
        fixed right-1 sm:right-5 z-50
        flex items-center justify-center
        transition-all duration-[9000ms] ease-out
      "
      style={{
        bottom: `${offset}px`,
      }}
    >
      <img
        src={chat}
        alt="Chat Icon"
        className="w-[80px] sm:w-[100px] object-contain drop-shadow-xl"
      />
    </button>
  );
};

export default ChatButton;
