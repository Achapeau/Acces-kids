import { Link } from "react-router-dom";
import ButtonIA from "../components/Button_ia";

import jeuxabc from "../assets/images/jeuxabc.png";
import jeux123 from "../assets/images/jeux123.png"
import MenuReturnButton from "../components/MenuReturnButton";
import ButtonSpeaker from "../components/ButtonSpeakerGreen";
import ButtonSpeakerOrange from "../components/ButtonSpeakerOrange";

function GameChoices() {

  return (
    <div className="flex flex-col">
       <div className="absolute left-1 top-20">
      <MenuReturnButton />
      </div>
      <ButtonIA />
      <div className="flex justify-center items-center">
      <h2 className="font-title text-[3rem] max-[1000px]:text-[1.5em] text-yellow mt-[3rem] max-[1000px]:mt-[0em] text-center"> Choisis un jeux </h2>
      <div className="mt-[4.5em] max-[1000px]:mt-[0.9em] ml-2">
      <ButtonSpeakerOrange text="Choisis un jeu"/>
      </div>
      </div>
      <div className="flex justify-evenly items-center m-[3em] max-[1000px]:m-[1em]">
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] max-[1000px]:text-[1em] text-greenDark text-center" > Apprendre à lire </h2>
        <ButtonSpeaker text="Apprendre à lire"/>
        <button className="w-[25rem] max-[1000px]:w-[10em] h-[20rem] max-[1000px]:h-[5em] flex ">
          <Link to="/jeux/alphabet">
            <img src={jeuxabc} alt=" illustration d'enfants qui jouent avec des lettres géantes" className="w-[25rem] max-[1000px]:w-[10em] object-contain"/>
          </Link>
        </button>
        </div>
        
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] max-[1000px]:text-[1em] text-greenDark text-center" > Apprendre à compter </h2>
        <ButtonSpeaker text="Apprendre à compter"/>
        <button className="w-[25rem] max-[1000px]:w-[10em] h-[20rem] max-[1000px]:h-[5em] justify-center items-center">
          <Link to="/jeux/nombres">
        <img src={jeux123} alt="illustration d'enfants avec des numéros géants" className="w-[25rem] max-[1000px]:w-[15em] object-contain"/>
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default GameChoices;
