import { Button } from "@mui/joy";
import React from "react";
import { StyledMuiButton } from "./StyledButton.element";

const StyledButton = ({
  type,
  isDisabled,
  handleClick,
  style,
  className,
  color,
  fullWidth,
  loading,
  size,
  variant,
  children,
}) => {
  return (
    <StyledMuiButton
      className={className}
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      sx={style}
      color={color}
      fullWidth={fullWidth}
      loading={loading}
      size={size}
      variant={variant}
    >
      {children}
    </StyledMuiButton>
  );
};

export default StyledButton;
