import React from "react";
import { AvatarImg, AvatarWrapper } from "./Avatar.element";

const Avatar = (props) => {
  const imgUrl =
    "https://www.seekpng.com/png/detail/115-1150456_avatar-generic-avatar.png";
  const alt = "User Avatar";

  // size: sl,md,lg
  return (
    <AvatarWrapper>
      <AvatarImg
        src={props.imgUrl || imgUrl}
        alt={props.alt || alt}
        size={props.size || "md"}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
