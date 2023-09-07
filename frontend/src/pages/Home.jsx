import { Link } from "react-router-dom";
import ButtonIA from "../components/Button_ia";

import lecture from "../assets/images/lecture.png";
import exploration from "../assets/images/exploration.png"
import ButtonSpeakerGreen from "../components/ButtonSpeakerGreen";

function Home() {
  return (
    <div className="flex flex-col max-[1000px]:h-[75vh] h-[88vh]">
      <ButtonIA />
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col justify-center items-center">
        <h2 className="font-title text-[2rem] max-[1000px]:text-[1rem] text-greenDark m-[1rem] max-[1000px]:m-[0.5rem] text-center max-w-[28vw] max-[1000px]:max-w-[30rem]"> Apprendre à lire et à compter </h2>
        <div className="mb-[1em] max-[1000px]:mb-[0.2em]">
        <ButtonSpeakerGreen text="Apprendre a lire et a compter"/>
        </div>
        </div>
        <button className="w-[20rem] max-[1000px]:w-[10rem] h-[20rem] max-[1000px]:h-[10rem] m-[1rem] max-[1000px]:m-[0rem] rounded-full border-solid border-almostWhite max-[1000px]:border-[0.5rem] border-[1rem] bg-yellow flex justify-center items-center">
          <Link to="/jeux">
            <img src={lecture} alt=" illustration d'une petite fille assise sur une pile de livre qui lit un livre" className="w-[15rem] max-[1000px]:w-[7.5rem] object-contain m-1 animate-waving-illus"/>
          </Link>

        </button>
        </div>
        
        <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center">
        <h2 className="font-title text-[2rem] max-[1000px]:text-[1rem] text-greenDark m-[1rem] max-[1000px]:m-[0.5rem] text-center max-w-[25vw]" > Apprendre à survivre </h2>
        <div className="mb-[1em] max-[1000px]:mb-[0.2em]">
        <ButtonSpeakerGreen text="Apprendre a survivre" className="mt-[1.3em]" />
        </div>
        </div>
        <button className="w-[20rem] max-[1000px]:w-[10rem] h-[20rem] max-[1000px]:h-[10rem] m-[1rem] max-[1000px]:m-[0rem] rounded-full border-solid border-almostWhite border-[1rem] max-[1000px]:border-[0.5rem] bg-pink flex justify-center items-center">
          <Link to="/gamesurvie">
            <img src={exploration} alt="illsutration de deux enfants qui font de l'orientation" className="w-[15rem] max-[1000px]:w-[7.5rem] object-contain m-1 animate-waving-illustra"/>
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
