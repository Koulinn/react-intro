import React from "react";
import { CustomStyledLink } from "./CustomLink.element";

const CustomLink = ({ children, inlineStyling, className, ...props }) => {
  console.log(props.hello, "props.hello");
  return (
    <CustomStyledLink
      to={props.to}
      className={className}
      onClick={props.onClick}
      style={inlineStyling}
    >
      {children}
    </CustomStyledLink>
  );
};

export default CustomLink;
