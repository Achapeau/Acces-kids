import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import JeuNombres from "../pages/JeuNombres";
import Alphabet from "../pages/Alphabet";
import ModalAnimal from "../components/ModalAnimal";
import GameChoices from "../pages/GamesChoices";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jeux" element={<GameChoices />} />
      <Route path="/alphabet" element={<Alphabet />} />
      <Route path="/modal" element={<ModalAnimal />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/numbergame" element={<JeuNombres />} />
    </Routes>
  );
}

export default AppRoutes;
