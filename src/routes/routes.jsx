import { Route, Routes } from "react-router-dom";
import About from "../pages/about/about";
import Skills from "../pages/skills/skills";
import Project from "../pages/project/project";

const routesApp = () => {
  const BackdropAction = ({ children }) => {
    return children;
  };

  return (
    <BackdropAction>
      <Routes>
        <Route path="/Portfolio" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BackdropAction>
  );
};

export default routesApp;
