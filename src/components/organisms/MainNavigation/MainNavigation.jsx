import React from "react";
import StyledLink from "../../atoms/StyledLink/StyledLink.component";

const MainNavigation = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/details">Details</StyledLink>
      <StyledLink to="/">Home</StyledLink>
    </div>
  );
};

export default MainNavigation;
