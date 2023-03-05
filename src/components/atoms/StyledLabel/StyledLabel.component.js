import React from "react";
import { LabelContainer } from "../Containers/Containers.element";
import { StyledLabel } from "./StyledLabel.element";

const Label = ({ children }) => {
  return (
    <LabelContainer>
      <StyledLabel>{children}</StyledLabel>
    </LabelContainer>
  );
};

export default Label;
