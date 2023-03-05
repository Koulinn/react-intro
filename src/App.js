import { Route, Routes } from "react-router";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Details from "./components/pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details" element={<Details />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
