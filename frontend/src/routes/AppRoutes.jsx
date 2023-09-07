import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import JeuNombres from "../pages/JeuNombres";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/numbergame" element={<JeuNombres />} />
    </Routes>
  );
}

export default AppRoutes;
