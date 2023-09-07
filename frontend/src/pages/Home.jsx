import { Link } from "react-router-dom";
import ButtonIA from "../components/Button_ia";

import lecture from "../assets/images/lecture.png";
import exploration from "../assets/images/exploration.png"
import ButtonSpeakerGreen from "../components/ButtonSpeakerGreen";

function Home() {
  return (
    <div className="flex flex-col h-[88vh]">
      <ButtonIA />
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
        <h2 className="font-title text-[2rem] text-greenDark m-[1rem] text-center"> Apprendre à lire et à compter </h2>
        <div className="mt-[1.3em]">
        <ButtonSpeakerGreen text="Apprendre a lire et a compter"/>
        </div>
        </div>
        <button className="w-[20rem] h-[20rem] m-[1rem] rounded-full border-solid border-almostWhite border-[1rem] bg-yellow flex justify-center items-center">
          <Link to="/jeux">
            <img src={lecture} alt=" illustration d'une petite fille assise sur une pile de livre qui lit un livre" className="w-[15rem] object-contain"/>
          </Link>

        </button>
        </div>
        
        <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
        <h2 className="font-title text-[2rem] text-greenDark m-[1rem] text-center" > Apprendre à survivre </h2>
        <div className="mt-[1.3em]">
        <ButtonSpeakerGreen text="Apprendre a survivre" className="mt-[1.3em]" />
        </div>
        </div>
        <button className="w-[20rem] h-[20rem] m-[1rem] rounded-full border-solid border-almostWhite border-[1rem] bg-pink flex justify-center items-center">
          <Link to="/survie">
            <img src={exploration} alt="illsutration de deux enfants qui font de l'orientation" className="w-[15rem] object-contain"/>
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
