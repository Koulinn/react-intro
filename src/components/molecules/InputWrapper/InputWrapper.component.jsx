import React from "react";
import { InputContainer } from "../../atoms/Containers/Containers.element";
import InputValidation from "../../atoms/InputValidation/InputValidation.component";
import Label from "../../atoms/StyledLabel/StyledLabel.component";

const InputWrapper = ({
  label,
  id,
  isRequired,
  hasValidation,
  validationMsg,
  validationResult,
  children,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      {isRequired && <span>*</span>}
      {children}

      {hasValidation && (
        <InputValidation
          validationMsg={validationMsg}
          validationResult={validationResult}
        />
      )}
    </InputContainer>
  );
};

export default InputWrapper;
