import { Route, Routes } from "react-router";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Details from "./components/pages/Details";
import MainNavigation from "./components/organisms/MainNavigation/MainNavigation";
import Avatar from "./components/atoms/Avatar/Avatar.component";
import CustomButton from "./components/atoms/CustomButton/CustomButton.component";
import CustomCard from "./components/molecules/CustomCard/CustomCard.component";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Avatar />
              <Avatar size="sl" />
              <Avatar size="md" />
              <Avatar size="lg" />
              <CustomButton>Click me</CustomButton>
              <CustomButton> */}
              {/* You can pass other components inside of this button */}
              {/* <>
                  <Avatar size="sl" />
                  Click me
                </> */}
              {/* </CustomButton> */}
              <CustomCard />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <MainNavigation />
    </div>
  );
}

export default App;
