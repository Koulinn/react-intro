import styled from "styled-components";

export const StyledCustomButton = styled.button`
  width: 50%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ styleType }) => {
    const isPrimary = styleType === "primary";
    const isSecondary = styleType === "secondary";

    if (isPrimary) {
      return "green";
    }

    if (isSecondary) {
      return "blue";
    }

    return "red";
  }};
`;
