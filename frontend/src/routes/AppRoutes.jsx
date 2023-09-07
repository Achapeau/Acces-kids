import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import JeuNombres from "../pages/JeuNombres";
import Alphabet from "../pages/Alphabet";
import GameSurvie from "../pages/GameSurvie";
import GameChoices from "../pages/GamesChoices";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamesurvie" element={<GameSurvie />} />
      <Route path="/jeux" element={<GameChoices />} />
      <Route path="/jeux/alphabet" element={<Alphabet />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/jeux/nombres" element={<JeuNombres />} />
    </Routes>
  );
}

export default AppRoutes;
