import React from "react";
import StyledButton from "../atoms/StyledButton/StyledButton.component";
import StyledLink from "../atoms/StyledLink/StyledLink.component";
import BaseCard from "../molecules/BaseCard/BaseCard.component";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <StyledButton
          variant={"outlined"}
          color="primary"
          disabled={false}
          type={"button"}
          size="md"
        >
          Submit
        </StyledButton>
        <BaseCard />
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/details">Details</StyledLink>
        <StyledLink to="/">Home</StyledLink>
      </div>
    </div>
  );
};

export default Home;
