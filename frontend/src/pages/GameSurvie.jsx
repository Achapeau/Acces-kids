import { useState } from "react";
import image from "../assets/images/bonhomme-removebg-preview.png";
import image2 from "../assets/images/Survie.png";
import image3 from "../assets/images/Group 10.png";
import image4 from "../assets/images/gauche.png";
import image5 from "../assets/images/Group 6.png";
import image6 from "../assets/images/Group 4.png";
import image7 from "../assets/images/Group 2.png";
import image8 from "../assets/images/maisondélabré-removebg-preview.png";
import image9 from "../assets/images/lacdanger.png";
import image10 from "../assets/images/baie.png";
import image11 from "../assets/images/chat-removebg-preview.png";
import image12 from "../assets/images/houseschool-removebg-preview.png";
import image13 from "../assets/images/champi-removebg-preview.png";
import image14 from "../assets/images/serpent-removebg-preview.png";
import image15 from "../assets/images/Potager-removebg-preview.png";
import image16 from "../assets/images/fallout-nope-boy-removebg-preview.png";

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
    setcharacterPosition({ x: 4, y: 78 });
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
      setPopupImageSrc(image9);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 13 (Champi)
    else if (
      characterPosition.x >= image13Coordinates.x1 &&
      characterPosition.x <= image13Coordinates.x2 &&
      characterPosition.y >= image13Coordinates.y1 &&
      characterPosition.y <= image13Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(image13);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 12 (School)
    else if (
      characterPosition.x >= image12Coordinates.x1 &&
      characterPosition.x <= image12Coordinates.x2 &&
      characterPosition.y >= image12Coordinates.y1 &&
      characterPosition.y <= image12Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(image12);
    }
    // Vérifiez si le personnage se déplace dans la zone de l'image 15 (Potager)
    else if (
      characterPosition.x >= image15Coordinates.x1 &&
      characterPosition.x <= image15Coordinates.x2 &&
      characterPosition.y >= image15Coordinates.y1 &&
      characterPosition.y <= image15Coordinates.y2
    ) {
      setShowPopup(true);
      setPopupImageSrc(image15);
    }
    // Si le personnage n'est pas dans les zones des images 9, 13, 12, et 15, masquez la popup
    else {
      setShowPopup(false);
    }
  };
  
  

  return (
    <div className="text-center mt-10 h-[88vh] w-full">
      <h1 className="text-4xl font-bold mb-4">Jeu de survie</h1>
      <div className="">
        <div
          className="relative bg-gray-300 h-96 mt-4 border-4 border-dashed border-gray-600 rounded-lg flex flex-col justify-center align-center objet-contain mx-auto max-w-[70%] m-[1rem]"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <img
            src={image8}
            alt="Maison Délabré"
            className="w-32 h-32 absolute top-10 left-8 object-contain"
          />

          {showPopup && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={image16}
                  alt="Popup Image"
                  className="w-32 h-32 object-contain"
                />
                <button
                  className="text-red-500 text-xs mt-2 block mx-auto"
                  onClick={() => setShowPopup(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

          <img
            src={image9}
            alt="Lac Danger"
            className="w-32 h-32 absolute bottom-0 left-1/3 transform -translate-x-2/2 object-contain"
          />

          <img
            src={image10}
            alt="Baie"
            className="w-32 h-32 absolute top-0 left-1/4 transform -translate-x-4/4 object-contain"
          />

          <img
            src={image11}
            alt="Chat"
            className="w-28 h-40 absolute bottom-12 left-1/2 transform -translate-x-1/2 object-contain"
          />

          <img
            src={image12}
            alt="School"
            className="w-32 h-32 absolute top-0 left-1/2 transform -translate-x-4/4 object-contain"
          />

          <img
            src={image13}
            alt="Champi"
            className="w-28 h-40 absolute bottom-5 right-1/3 transform -translate-x-4/4 object-contain"
          />

          <img
            src={image14}
            alt="Serpent"
            className="w-32 h-32 absolute top-10 right-20 object-contain"
          />

          <img
            src={image15}
            alt="Potager"
            className="w-28 h-32 absolute bottom-0 right-20 object-contain"
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
              src={image}
              alt="character"
              className="w-16 h-20 absolute top-0 transform -translate-y-8 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt5">
        <button
          className="w-20 h-20 bg-[#B2C84F] hover:bg-green-600 text-white font-bold py-4 px-4 mr-5 rounded"
    onClick={startGame}
  >
    <img
    src={image3} className="object-contain" />
    
  </button>
  <button
    className="w-20 h-20 bg-[#F5BC49] hover:bg-orange-600 text-white font-bold py-4 px-4 mr-5 rounded"
    onClick={moveLeft}
  >
    <img
    src={image4} className="object-contain" />

  </button>
  <button
    className="w-20 h-20 bg-[#E7F2C1] hover:bg-green-600 text-white font-bold py-4 px-4 ml-4 mr-5 rounded"
    onClick={moveRight}
  >
    <img
    src={image5} className="object-contain" />

  </button>
  <button
    className="w-20 h-20 bg-[#F094C4] hover:bg-green-600 text-white font-bold py-4 px-4 ml-4 mr-5 rounded"
    onClick={moveUp}
  >
    <img
    src={image6} className="object-contain" />
   
  </button>
  <button
    className="w-20 h-20 bg-[#E7F2C1] hover:bg-green-600 text-white font-bold py-4 px-4 ml-3 mr-5 rounded"
    onClick={moveDown}
  >
   <img
    src={image7} className="object-contain" />
  </button>
</div>
    </div>
  );
}

export default Game;
