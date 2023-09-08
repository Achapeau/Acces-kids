import { Link } from "react-router-dom";
import logo from "../assets/images/logoacces-removebg-preview.png";

function NavBar() {
  return (
    <div className="bg-almostWhite h-[6rem] max-[1000px]:h-[4rem] w-screen flex justify-center items-center">
      <Link to="/">
        <img src={logo} alt="Logo"  className="h-[5rem] max-[1000px]:h-[3.5rem]" />
      </Link>
    </div>
  );
}

export default NavBar;
