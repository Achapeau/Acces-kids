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

function Game() {
  const [characterPosition, setcharacterPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [setPopupImageSrc] = useState(null);

  const image12Coordinates = {
    x1: 40,
    x2: 70,
    y1: 60,
    y2: 80,
  };
  
  // Coordonnées de l'image 15 (Potager)
  const image15Coordinates = {
    x1: 80,
    x2: 95,
    y1: 10,
    y2: 30,
  };

  // Coordonnées de l'image 9 (Lac Danger)
  const image9Coordinates = {
    x1: 10,
    x2: 42,
    y1: 8,
    y2: 40,
  };
  
  // Coordonnées de l'image 13 (Champi)
  const image13Coordinates = {
    x1: 60,
    x2: 92,
    y1: 10,
    y2: 42,
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
      characterPosition.x >= image9Coordinates.x1 &&
      characterPosition.x <= image9Coordinates.x2 &&
      characterPosition.y >= image9Coordinates.y1 &&
      characterPosition.y <= image9Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(marecage);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 13 (Champi)
    else if (
      characterPosition.x >= image13Coordinates.x1 &&
      characterPosition.x <= image13Coordinates.x2 &&
      characterPosition.y >= image13Coordinates.y1 &&
      characterPosition.y <= image13Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(champi);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 12 (School)
    else if (
      characterPosition.x >= image12Coordinates.x1 &&
      characterPosition.x <= image12Coordinates.x2 &&
      characterPosition.y >= image12Coordinates.y1 &&
      characterPosition.y <= image12Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(ecole);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 15 (Potager)
    else if (
      characterPosition.x >= image15Coordinates.x1 &&
      characterPosition.x <= image15Coordinates.x2 &&
      characterPosition.y >= image15Coordinates.y1 &&
      characterPosition.y <= image15Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(nope);
    }
    // Si le personnage n'est pas dans les zones des images 9, 13, 12, et 15, masquez la popup
    else {
      setShowPopup(false);
    }
  };
  
  

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
