import { useEffect, useState } from "react";
import axios from "axios";

import NumberWin from "../components/numberWin";
import NumberLoose from "../components/NumberLoose";
import ButtonSpeakerGreen from "../components/ButtonSpeakerGreen";
import ButtonIA from "../components/Button_ia";
import MenuReturnButton from "../components/MenuReturnButton";

function JeuNombres() {
  const [images, setImages] = useState([]);
  const [winning, setWinning] = useState(false);
  const [loosing, setLoosing] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [displayedImages, setDisplayedImages] = useState([]);
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  //lance le jeu lorsque le composant renders
  useEffect(() => {
    const number = generateRandomNumber();
    console.log(number);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/numbers/${number}`)
      .then((response) => {
        setImages(response.data);
        setRandomNumber(number);
      })
      .catch((err) => console.error(err));
  }, []);

  //Remplis progressivement l'array "displayedImages" au render du composant et lorsque l'array "images" change
  useEffect(() => {
    // When images change, set a timeout to display them one by one
    const timeoutIds = [];
    images.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setDisplayedImages((prevImages) => [...prevImages, images[index]]);
      }, index * 1200); // Adjust the delay here (500ms for half a second)

      timeoutIds.push(timeoutId);
    });

    return () => {
      // Cleanup: clear the timeouts when component unmounts
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      setDisplayedImages([]);
    };
  }, [images]);

  //Restart le jeu, fonction appelé depuis la modal "NumberWin"
  const restartGame = () => {
    const number = generateRandomNumber();

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/numbers/${number}`)
      .then((response) => {
        setImages(response.data);
        setRandomNumber(number);
      })
      .catch((err) => console.error(err));
  };

  const numbers = [
    { number: 1, text: "un", color: "almostWhite" },
    { number: 2, text: "deux", color: "greenDark" },
    { number: 3, text: "trois", color: "pink" },
    { number: 4, text: "quatre", color: "yellow" },
    { number: 5, text: "cinq", color: "almostWhite" },
    { number: 6, text: "six", color: "greenDark" },
    { number: 7, text: "sept", color: "pink" },
    { number: 8, text: "huit", color: "yellow" },
    { number: 9, text: "neuf", color: "almostWhite" },
    { number: 10, text: "dix", color: "greenDark" },
  ];

  const checkGame = (selectedNumber) => {
    if (selectedNumber === randomNumber) {
      setWinning(true);
    } else {
      setLoosing(true);
    }
  };

  return (
    <>
      <div className="w-screen h-[80vh] max-[1000px]:h-[75vh]  flex flex-col items-center">
        <div className="fixed top-20 right-1 max-[1000px]:top-10 max-[1000px]:right-0">
          <ButtonIA />
        </div>
        <div className="fixed top-20 left-1 max-[1000px]:top-10 max-[1000px]:left-0">
          <MenuReturnButton />
        </div>
        <div className="flex items-center">
          <h1 className="text-pink text-5xl max-[1000px]:text-3xl font-heading my-5 mt-10 mx-5">
            Apprends à compter
          </h1>
          <div className="translate-y-3">
            <ButtonSpeakerGreen text="Compte les animaux" />
          </div>
        </div>
        <div className="flex flex-col h-[70vh] max-[1000px]:flex-row justify-around max-[1000px]:justify-between items-center">
          <div className="flex flex-wrap justify-around items-center w-full max-[1000px]:w-4/6 max-[1000px]:mr-4 p-3">
            {images.length > 0 &&
              displayedImages.map((image) => (
                <img
                  className="h-[150px] max-[1000px]:h-[70px] animate-slide m-4 max-[1000px]:m-2"
                  src={`../../src/assets/images/${image.image_animal}`}
                />
              ))}
          </div>

          <div className="max-[1000px]:w-2/6 max-[1000px]:flex max-[1000px]:flex-wrap max-[1000px]:justify-center">
            {numbers.map((elem) => (
              <button
                className="focus:scale-[1.1] transition-transform duration-300 ease-in-out"
                onClick={() => checkGame(elem.number)}
              >
                <h1
                  className={`text-${elem.color} text-8xl max-[1000px]:text-4xl px-5 max-[1000px]:my-2 `}
                >
                  {elem.number}
                </h1>
              </button>
            ))}
          </div>
        </div>
      </div>
      {winning && (
        <NumberWin
          number={numbers[randomNumber - 1]}
          setWinning={setWinning}
          restartGame={restartGame}
        />
      )}
      {loosing && <NumberLoose setLoosing={setLoosing} />}
    </>
  );
}

export default JeuNombres;
