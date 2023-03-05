import React from "react";
import StyledButton from "../atoms/StyledButton/StyledButton.component";
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
        <div style={{ margin: "64px" }}>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
