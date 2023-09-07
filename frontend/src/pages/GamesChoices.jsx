import ButtonIA from "../components/Button_ia";

import jeuxabc from "../assets/images/jeuxabc.png";
import jeux123 from "../assets/images/jeux123.png"
import MenuReturnButton from "../components/MenuReturnButton";
import ButtonSpeaker from "../components/ButtonSpeakerGreen";
import ButtonSpeakerOrange from "../components/ButtonSpeakerOrange";

function GameChoices() {

  return (
    <div className="flex flex-col">
      <MenuReturnButton />
      <ButtonIA />
      <div className="flex justify-center items-center">
      <h2 className="font-title text-[3rem] text-yellow mt-[3rem] text-center"> Choisis un jeux </h2>
      <div className="mt-[4.5em] ml-2">
      <ButtonSpeakerOrange text="Choisis un jeu"/>
      </div>
      </div>
      <div className="flex justify-evenly items-center m-[3em]">
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] text-greenDark text-center" > Apprendre à lire </h2>
        <ButtonSpeaker text="Apprendre à lire"/>
        <button className="w-[25rem] h-[20rem] flex ">
          <img src={jeuxabc} alt=" illustration d'enfants qui jouent avec des lettres géantes" className="w-[25rem] object-contain"/>
        </button>
        </div>
        
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] text-greenDark text-center" > Apprendre à compter </h2>
        <ButtonSpeaker text="Apprendre à compter"/>
        <button className="w-[25rem] h-[20rem] justify-center items-center">
        <img src={jeux123} alt="illustration d'enfants avec des numéros géants" className="w-[25rem] object-contain"/>
        </button>
        </div>
      </div>
    </div>
  );
}

export default GameChoices;
