import { useState } from "react";

import enfant from "../assets/images/bonhomme-removebg-preview.png";
import image2 from "../assets/images/Survie.png";
import start from "../assets/images/start.png";
import gauche from "../assets/images/Gauche.png";
import image5 from "../assets/images/Group 6.png";
import image6 from "../assets/images/Group 4.png";
import image7 from "../assets/images/Group 2.png";
import maison_delabre from "../assets/images/maisondélabré-removebg-preview.png";
import marecage from "../assets/images/lacdanger.png";
import baie from "../assets/images/baie.png";
import chat from "../assets/images/chat-removebg-preview.png";
import ecole from "../assets/images/houseschool-removebg-preview.png";
import champi from "../assets/images/champi-removebg-preview.png";
import serpent from "../assets/images/serpent-removebg-preview.png";
import potager from "../assets/images/Potager-removebg-preview.png";
import nope from "../assets/images/fallout-nope-boy-removebg-preview.png";
import ButtonSpeakerOrange from "../components/ButtonSpeakerOrange";
import ButtonSpeakerGreen from "../components/ButtonSpeakerGreen";
import MenuReturnButton from "../components/MenuReturnButton";
import ButtonIA from "../components/Button_ia";
import Good from "../assets/images/Fallout-Pip-Boy-PNG-Picture-removebg-preview.png"

function Game() {
  const [characterPosition, setcharacterPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

const imagemaisondelabre={
  x1: 11,
  x2: 11,
  y1: 38,
  y2: 38,
}

const imageSerpentCoordinates= {
  x1: 91,
  x2: 91,
  y1: 38,
  y2: 38,
};

// Coordonnées de l'image 12 (School)
  const imageecole = {
  x1:51,
  x2: 51,
  y1: 18,
  y2: 18,
};
  

  
  // Coordonnées de l'image 15 (Potager)
  const imagepotager = {
    x1: 80,
    x2: 91,
    y1: 80,
    y2: 91,
  };

  // Coordonnées de l'image 9 (Lac Danger)
  const imagemarecage = {
  x1: 41,
  x2: 41,
  y1: 78,
  y2: 78,
};
  
  // Coordonnées de l'image 13 (Champi)
  const imagechampi = {
    x1: 60,
    x2: 80,
    y1: 70,
    y2: 90,
  };

  const moveLeft = () => {
    if (characterPosition.x > 10) {
      setcharacterPosition({ ...characterPosition, x: characterPosition.x - 10 });
      setScore(score + 10);
      checkPopup();
    }
  };

  const moveRight = () => {
    if (characterPosition.x < 90) {
      setcharacterPosition({ ...characterPosition, x: characterPosition.x + 10 });
      setScore(score + 10);
      checkPopup();
    }
  };

  const moveUp = () => {
    if (characterPosition.y > 10) {
      setcharacterPosition({ ...characterPosition, y: characterPosition.y - 10 });
      setScore(score + 10);
      checkPopup();
    }
  };

  const moveDown = () => {
    if (characterPosition.y < 90) {
      setcharacterPosition({ ...characterPosition, y: characterPosition.y + 10 });
      setScore(score + 10);
      checkPopup();
    }
  };

  const startGame = () => {
    setScore(0);
    setcharacterPosition({ x: 1, y: 78 });
  };

  const checkPopup = () => {
    // Vérifiez si le personnage se déplace dans la zone de l'image 9 (Lac Danger)
    if (
      (characterPosition.x >= imagemarecage.x1 &&
        characterPosition.x <= imagemarecage.x2 &&
        characterPosition.y >= imagemarecage.y1 &&
        characterPosition.y <= imagemarecage.y2) ||
      // Vérifiez si le personnage est sur l'image 13 (Champi)
      (characterPosition.x >= imagechampi.x1 &&
        characterPosition.x <= imagechampi.x2 &&
        characterPosition.y >= imagechampi.y1 &&
        characterPosition.y <= imagechampi.y2) ||
      // Vérifiez si le personnage est sur l'image serpent
      (characterPosition.x >= imageSerpentCoordinates.x1 &&
        characterPosition.x <= imageSerpentCoordinates.x2 &&
        characterPosition.y >= imageSerpentCoordinates.y1 &&
        characterPosition.y <= imageSerpentCoordinates.y2)||

        (characterPosition.x >= imagemaisondelabre.x1 &&
          characterPosition.x <= imagemaisondelabre.x2 &&
          characterPosition.y >= imagemaisondelabre.y1 &&
          characterPosition.y <= imagemaisondelabre.y2)
    ) {

  
    setShowPopup(true);
    } else {
    setShowPopup(false);
    }
    
     // Vérifiez si le personnage se déplace dans la zone de l'image 12 (School)
     if (
      characterPosition.x >= imageecole.x1 &&
      characterPosition.x <= imageecole.x2 &&
      characterPosition.y >= imageecole.y1 &&
      characterPosition.y <= imageecole.y2
    ) {
      setShowPopup2(true);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 15 (Potager)
    else if (
      characterPosition.x >= imagepotager.x1 &&
      characterPosition.x <= imagepotager.x2 &&
      characterPosition.y >= imagepotager.y1 &&
      characterPosition.y <= imagepotager.y2
    ) {
      setShowPopup2(true);
    }
    // Si le personnage n'est pas dans les zones des images 12 et 15, masquez la deuxième popup
    else {
      setShowPopup2(false);
    }
  };
  
  console.log(characterPosition.x, characterPosition.y)
  
  
  

  return (
    <div className="text-center mt-[1.5em] h-screen w-screen">
       <ButtonIA />
      <div className="absolute top-[10%]">
      <MenuReturnButton />
      </div>
      <div className="flex justify-center items-center">
      <h1 className="text-4xl text-yellow mb-4 mr-4">Jeu de survie</h1>
      <ButtonSpeakerOrange text="jeu de survie, appui sur le bouton vert pour commencer et appui sur les flèche pour te déplacer" />
      </div>
      <div className="">
        <div
          className="relative h-96 mt-4 rounded-lg flex flex-col justify-center align-center objet-contain mx-auto max-w-[70%] m-[1rem]"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <img
            src={maison_delabre}
            alt="Maison Délabré"
            className="w-32 h-32 absolute top-10 left-[2.5%] object-contain"
          />

          {showPopup && (
            <div className="justify-center items-center flex absolute top-0 left-0 w-full h-full">
              <div className="bg-blue opacity-100 z-30 p-4 rounded-lg shadow-lg h-[30vh] w-[25vw]">
                <img
                  src={nope}
                  alt="Popup Image"
                  className="w-[15rem] h-32 object-contain"
                />
                <div className="m-2">
                <ButtonSpeakerGreen text="Fais demi tours, c'est dangereux"/>
                </div>
                <button
                  className="text-almostWhite text-xs mt-2 block mx-auto"
                  onClick={() => setShowPopup(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

{showPopup2 && (
  <div className="justify-center items-center flex absolute top-0 left-0 w-full h-full">
    <div className="bg-blue opacity-100 z-30 p-4 rounded-lg shadow-lg h-[30vh] w-[25vw]">
      <img
        src={Good}
        alt="Good"
        className="w-[15rem] h-32 object-contain"
      />
      <div className="m-2">
        <ButtonSpeakerGreen text="Message de la deuxième popup" />
      </div>
      <button
        className="text-almostWhite text-xs mt-2 block mx-auto"
        onClick={() => setShowPopup2(false)}
      >
        Fermer
      </button>
    </div>
  </div>
)}


          <img
            src={marecage}
            alt="Lac Danger"
            className="w-32 h-32 absolute bottom-0 left-1/3 transform -translate-x-2/2 object-contain"
          />

          <img
            src={baie}
            alt="Baie"
            className="w-32 h-32 absolute top-20 right-[17%] transform -translate-x-4/4 object-contain"
          />

          <img
            src={chat}
            alt="Chat"
            className="w-[6rem] h-[6rem] absolute bottom-[12.5rem] left-[38%] transform -translate-x-1/2 object-contain"
          />

          <img
            src={ecole}
            alt="School"
            className="w-32 h-32 absolute top-0 left-1/2 transform -translate-x-4/4 object-contain"
          />

          <img
            src={champi}
            alt="Champi"
            className="w-28 h-40 absolute bottom-5 right-1/3 transform -translate-x-4/4 object-contain"
          />

          <img
            src={serpent}
            alt="Serpent"
            className="w-28 h-28 absolute top-[3.5rem] right-[2%] object-contain"
          />

          <img
            src={potager}
            alt="Potager"
            className="w-[8rem] h-32 absolute bottom-0 right-2 object-contain"
          />

          <div className="absolute w-full h-2 bg-gray-600 top-1/4" />
          <div className="absolute w-full h-2 bg-gray-600 top-2/4" />
          <div className="absolute w-full h-2 bg-gray-600 top-3/4" />
          <div className="absolute h-full w-2 bg-gray-600 left-1/4" />
          <div className="absolute h-full w-2 bg-gray-600 left-2/4" />
          <div className="absolute h-full w-2 bg-gray-600 left-3/4" />

          <div className="absolute w-2 h-20 bg-gray-600 left-30 top-20" />
          <div className="absolute w-2 h-20 bg-gray-600 left-70 top-20" />
          <div className="absolute w-2 h-20 bg-gray-600 left-30 top-60" />
          <div className="absolute w-2 h-20 bg-gray-600 left-70 top-60" />

          <div
            className="absolute w-16 h-16 bg-blue-500 rounded-full"
            style={{
              left: characterPosition.x + "%",
              top: characterPosition.y + "%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={enfant}
              alt="character"
              className="w-16 h-20 absolute top-0 transform -translate-y-8 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-0 mb-5">
        <button
          className="w-[9rem] h-[6rem] m-2"
    onClick={startGame}
  >
    <img
    src={start} className="object-contain w-[9rem]" />
    
  </button>
  <button
    className="w-[9rem] h-[6rem] m-2"
    onClick={moveLeft}
  >
    <img
    src={gauche} className="object-contain w-[9rem]" />

  </button>
  <button
    className="w-[9rem] h-[6rem] m-2"
    onClick={moveRight}
  >
    <img
    src={image5} className="object-contain w-[9rem]" />

  </button>
  <button
    className="w-[9rem] h-[6rem] m-2"
    onClick={moveUp}
  >
    <img
    src={image6} className="object-contain w-[9rem]" />
   
  </button>
  <button
    className="w-[9rem] h-[6rem] m-2"
    onClick={moveDown}
  >
   <img
    src={image7} className="object-contain w-[9rem]" />
  </button>
</div>
    </div>
  );
}

export default Game;
