import React from "react";
import { InputValidationContainer } from "../Containers/Containers.element";

const InputValidation = ({ validationResult, validationMsg }) => {
  const IsSuccess = (validationResult === "success" && validationMsg) || "";
  const IsInvalid =
    (validationResult === "invalid" && validationMsg) || "Invalid input";

  const displayedMessage = IsSuccess || IsInvalid;

  return (
    <InputValidationContainer>{displayedMessage}</InputValidationContainer>
  );
};

export default InputValidation;
