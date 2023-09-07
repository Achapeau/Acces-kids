import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Alphabet from "../pages/Alphabet";
import GameChoices from "../pages/GamesChoices";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jeux" element={<GameChoices />} />
      <Route path="/jeux/alphabet" element={<Alphabet />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
