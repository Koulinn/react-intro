import StyledButton from "./components/atoms/StyledButton/StyledButton.component";

function App() {
  return (
    <StyledButton
      variant={"outlined"}
      color="primary"
      disabled={false}
      type={"button"}
      size="md"
    >
      Submit
    </StyledButton>
  );
}

export default App;
