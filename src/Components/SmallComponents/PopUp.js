import React, { useState, useEffect } from "react";
import { Wrap, WrapItem, useToast } from "@chakra-ui/react";
import "./Design.css";

export function PopUpButton({ buttonLabel, toastMessage, className, onClick, icon, classNameIcon }) {
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();

  const handleClick = () => {
    // Handle the onClick event passed as a prop
    onClick();
    setShowToast(true);
  };

  useEffect(() => {
    // Show the toast when showToast is true
    if (showToast) {
      toast({
        title: `${toastMessage}`, // Use the separate toastMessage prop for the toast content
        status: "success",
        isClosable: true,
        duration: 1000,
      });

      // Reset the showToast state back to false after showing the toast
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 0);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [showToast, toast, toastMessage]);

  return (
    <Wrap>
      <WrapItem>
        <button
          className={`popup-button-style ${className}`}
          onClick={handleClick}
        >
          <span className={`popup-icon ${classNameIcon}`}>{icon}</span> {buttonLabel}
        </button>
      </WrapItem>
    </Wrap>
  );
}
