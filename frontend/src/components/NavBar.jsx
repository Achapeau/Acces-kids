import logo from "../assets/images/logoacces-removebg-preview.png";

function NavBar() {
  return (
    <div className="bg-almostWhite h-[6rem] w-screen flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-[5rem]" />
    </div>
  );
}

export default NavBar;
