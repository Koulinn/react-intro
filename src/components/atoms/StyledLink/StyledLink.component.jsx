import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { StyledMuiLink } from "./StyledLink.element";

const StyledLink = ({
  level,
  isDisabled,
  handleClick,
  style,
  className,
  color,
  overlay,
  underline,
  variant,
  to,
  children,
}) => {
  return (
    <StyledMuiLink
      component={RouterLink}
      to={to}
      className={className}
      onClick={handleClick}
      level={level || "body1"}
      disabled={isDisabled || false}
      sx={style}
      color={color || "info"}
      overlay={overlay || false}
      underline={underline || "hover"}
      variant={variant || "outlined"}
    >
      {children}
    </StyledMuiLink>
  );
};

export default StyledLink;
