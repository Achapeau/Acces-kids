import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Alphabet from "../pages/Alphabet";
import ModalAnimal from "../components/ModalAnimal";
import IA from "../pages/IA"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alphabet" element={<Alphabet />} />
      <Route path="/ia" element={<IA />} />
      <Route path="/modal" element={<ModalAnimal />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
