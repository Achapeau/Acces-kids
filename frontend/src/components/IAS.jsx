import bonhomme from "../../src/assets/images/bonhomme-removebg-preview.png";
import bas from "../../src/assets/images/Group 2.png";
import haut from "../../src/assets/images/Group 4.png";
import droite from "../../src/assets/images/Group 6.png";
import gauche from "../../src/assets/images/gauche.png";
import ButtonSpeakerIA from "./ButtonSpeakerIA";
import ButtonSpeakerOrange from "./ButtonSpeakerOrange";
import { useState } from "react";

function IAS() {
  const [animation, setAnimation] = useState(null);

  const moveRight = () => {
    setAnimation("animate-moveRight");
    setTimeout(() => {
      setAnimation(null);
    }, 3000);
  };

  const moveLeft = () => {
    setAnimation("animate-moveLeft");
    setTimeout(() => {
      setAnimation(null);
    }, 3000);
  };

  const moveUp = () => {
    setAnimation("animate-moveUp");
    setTimeout(() => {
      setAnimation(null);
    }, 3000);
  };

  const moveDown = () => {
    setAnimation("animate-moveDown");
    setTimeout(() => {
      setAnimation(null);
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between h-[70vh] bg-greenLight ">
        <div className="flex justify-end  w-full mt-4 mr-6">
          <ButtonSpeakerOrange text="Appuis sur les flèches pour faire bouger le bonhomme" />
        </div>
        <div className="h-[100px] mb-10" onClick={() => moveUp()}>
          <img src={haut} className="h-[100px]" />
          <div className="-translate-y-24 translate-x-15 opacity-0">
            <ButtonSpeakerIA text="Déplace toi vers le haut" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-5">
          <div onClick={() => moveLeft()}>
            <img src={gauche} className="h-[100px] translate-y-10" />
            <div className="-translate-y-16 translate-x-15 opacity-0">
              <ButtonSpeakerIA text="Déplace toi vers la gauche" />
            </div>
          </div>
          <img src={bonhomme} className={`w-[7vw] ${animation} z-10`} />
          <div onClick={() => moveRight()}>
            <img src={droite} className="h-[100px] translate-y-10" />
            <div className="-translate-y-16 translate-x-15 opacity-0">
              <ButtonSpeakerIA text="Déplace toi vers la droite" />
            </div>
          </div>
        </div>
        <div onClick={() => moveDown()} className="mt-10">
          <img src={bas} className="h-[100px]" />
          <div className="-translate-y-24 translate-x-15 opacity-0">
            <ButtonSpeakerIA text="Déplace toi vers le bas" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IAS;
