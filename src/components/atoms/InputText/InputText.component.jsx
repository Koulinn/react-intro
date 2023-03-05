import React from "react";
import { StyledInputText } from "./InputText.element";

const InputText = ({
  type,
  isDisabled,
  handleClick,
  style,
  className,
  handleChange,
  handleFocus,
  id,
  value,
  defaultValue,
  placeholder,
}) => {
  return (
    <StyledInputText
      id={id}
      className={className}
      onClick={handleClick}
      onChange={handleChange}
      onFocus={handleFocus}
      type={type || "text"} // password, email, text, textarea
      disabled={isDisabled}
      styled={style}
      value={value}
      defaultValue={defaultValue || ""}
      placeholder={placeholder || "Please enter a something"}
    />
  );
};

export default InputText;
