import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRoutes from "../src/routes/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
