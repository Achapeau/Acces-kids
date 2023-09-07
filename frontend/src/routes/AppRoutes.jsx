import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Alphabet from "../pages/Alphabet";
import GameSurvie from "../pages/GameSurvie";
import GameChoices from "../pages/GamesChoices";
import IA from "../pages/IA"

function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamesurvie" element={<GameSurvie />} />
      <Route path="/jeux" element={<GameChoices />} />
      <Route path="/jeux/alphabet" element={<Alphabet />} />
      <Route path="/ia" element={<IA />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
