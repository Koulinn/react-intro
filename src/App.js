import { Route, Routes } from "react-router";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Details from "./components/pages/Details";
import MainNavigation from "./components/organisms/MainNavigation/MainNavigation";
import Avatar from "./components/atoms/Avatar/Avatar.component";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Avatar />
              <Avatar size="sl" />
              <Avatar size="md" />
              <Avatar size="lg" />
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
