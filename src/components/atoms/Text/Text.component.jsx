import React from "react";
import { StyledH1, StyledH2, StyledH3, StyledP } from "./Text.element.js";

const Text = ({ type, variant, children }) => {
  if (type === "h1") {
    return <StyledH1>{children}</StyledH1>;
  }
  if (type === "h2") {
    return <StyledH2>{children}</StyledH2>;
  }
  if (type === "h3") {
    return <StyledH3>{children}</StyledH3>;
  }

  return <StyledP>{children}</StyledP>;
};

export default Text;
