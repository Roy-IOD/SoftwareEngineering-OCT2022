import { Routes, Route } from "react-router-dom";
import Home from "./pagesMP/Home";
import About from "./pagesMP/About";
import SingleMeal from "./pagesMP/SingleMeal";
import Error from "./pagesMP/Error";

// import components
import Navbar from "./componentsmini/NavBar";

export const AppRoutes = (props) => {
  return (
    // see https://reactrouter.com/en/main/components/routes for more info
    <Routes>
      <Navbar />
      <switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meal/:id" element={<SingleMeal />} />
        <Route path="*" element={<Error />} />
      </switch>
    </Routes>
  );
};
