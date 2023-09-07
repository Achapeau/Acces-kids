import { useEffect, useState } from "react";
import axios from "axios";
import speaker from "../../public/icons/Speaker.png";
import NumberWin from "../components/numberWin";
import NumberLoose from "../components/numberLoose";

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
      <div className="h-screen w-screen flex flex-col items-center justify-around">
        <div className="flex items-center">
          <h1 className="text-pink text-5xl font-heading my-10">
            Apprend à compter
          </h1>
          <img src={speaker} className="h-15 ml-10 translate-y-2" />
        </div>
        <div className="flex flex-wrap justify-around items-center h-3/5 w-full p-5">
          {images.length > 0 &&
            displayedImages.map((image, index) => (
              <img
                className="h-[170px] animate-slide"
                src={`../../src/assets/images/${image.image_animal}`}
              />
            ))}
        </div>

        <div className="mb-24">
          {numbers.map((elem) => (
            <button onClick={() => checkGame(elem.number)}>
              <h1 className={`text-${elem.color} text-8xl px-5`}>
                {elem.number}
              </h1>
            </button>
          ))}
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
