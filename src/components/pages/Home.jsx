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
      </div>
    </div>
  );
};

export default Home;
