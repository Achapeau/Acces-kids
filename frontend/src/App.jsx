import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "../src/routes/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen">
        <NavBar />
        <div className="max-h-[88vh]">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
