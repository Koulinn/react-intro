import React from "react";
import { StyledInputNumber } from "./InputNumber.element";

const InputNumber = ({
  isDisabled,
  handleClick,
  style,
  className,
  handleChange,
  handleFocus,
  id,
}) => {
  return (
    <StyledInputNumber
      id={id}
      className={className}
      onClick={handleClick}
      onChange={handleChange}
      onFocus={handleFocus}
      type={"number"}
      disabled={isDisabled}
      styled={style}
    />
  );
};

export default InputNumber;
