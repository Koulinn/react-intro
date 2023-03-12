import styled from "styled-components";
import sizeUtils from "../../../utilities/sizeUtils";

export const AvatarWrapper = styled.div``;
export const AvatarImg = styled.img`
  object-fit: cover;
  width: ${({ size }) => {
    if (sizeUtils.checkIsSmall(size)) {
      return "2rem";
    } else if (sizeUtils.checkIsMedium(size)) {
      return "4rem";
    } else if (sizeUtils.checkIsLarge(size)) {
      return "6rem";
    } else {
      return "4rem";
    }
  }};
`;
