import { Route, Routes } from "react-router";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Details from "./components/pages/Details";
import MainNavigation from "./components/organisms/MainNavigation/MainNavigation";

function App() {

  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
