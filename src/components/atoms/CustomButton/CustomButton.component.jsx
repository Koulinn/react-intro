import React from "react";
import { StyledCustomButton } from "./CustomButton.element";

const CustomButton = ({ children, type, styleType, onClick, isDisabled }) => {
  return (
    <StyledCustomButton
      type={type || "button"}
      styleType={styleType}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
