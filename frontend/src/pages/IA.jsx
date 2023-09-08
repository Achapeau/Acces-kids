import { useEffect, useState } from "react";
import axios from "axios";
import MessageIA from "../components/messageIA";
import MenuReturnButton from "../components/MenuReturnButton";

function IA() {
  const [chiffre, setChiffre] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [alphabet, setAlphabet] = useState({});
  const [data2, setData2] = useState([]);
  const [educatif, setEducatif] = useState(false);
  const [IASurvie, setIASurvie] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendUrl}/iaalphabet`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));

    axios
      .get(`${backendUrl}/iacompter`)
      .then((response) => {
        setData2(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const compter = () => {
    setIsActive(true);
    setEducatif(false);
    setIASurvie(false);
    setAlphabet([]);
    setChiffre(data2);
  };

  const lire = () => {
    setIsActive(true);
    setIASurvie(false)
    setEducatif(false);
    setChiffre([]);
    setAlphabet(data);
  };

  const survie = () => {
    setIsActive(true);
    setIASurvie(true);
    setEducatif(false);
    setAlphabet([]);
    setChiffre([]);
  };

  const apprendre = () => {
    setIASurvie(false)
    setIsActive(true);
    setChiffre([]);
    setAlphabet([]);
    setEducatif(true);
  };
  console.log(educatif);

  const explication = () => {};

  return (
    <div className="h-[88vh]">
      <MenuReturnButton />

      <div className="flex items-center space-between justify-center relative">
        {!isActive ? (
          <div className="flex flex-wrap space-evenly rounded-xl h-[70vh] w-[70vw] bg-almostWhite mx-20 absolute -top-20 left-[13vw] ">
            <div className="m-auto rounded-xl h-[20vw] w-[20vw]">
              <button type="button" onClick={compter}>
                <img src="../src/assets/images/compter-max.png" alt="compter" />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[20vw] w-[20vw]">
              <button type="button" onClick={lire}>
                <img
                  src="../src/assets/images/alphabet-max.png"
                  alt="alphabet"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[20vw] w-[20vw]">
              <button type="button" onClick={survie}>
                <img
                  src="../src/assets/images/jeu-survie-max.png"
                  alt="survie"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[20vw] w-[20vw]">
              <button type="button" onClick={apprendre}>
                <img
                  src="../src/assets/images/jeux-educ-max.png"
                  alt="apprendre"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[20vw] w-[20vw]">
              <button type="button" onClick={explication}>
                <img
                  src="../src/assets/images/survie-max.png"
                  alt="explication"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap space-evenly rounded-xl h-[30vh] w-[30vw] bg-almostWhite mx-auto absolute top-[10vh] left-[5vw] z-0">
            <div className="m-auto rounded-xl h-[8vw] w-[8vw] z-50">
              <button type="button" onClick={compter}>
                <img src="../src/assets/images/compter-max.png" alt="compter" />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[8vw] w-[8vw] z-50">
              <button type="button" onClick={lire}>
                <img
                  src="../src/assets/images/alphabet-max.png"
                  alt="alphabet"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[8vw] w-[8vw] z-50">
              <button type="button" onClick={survie}>
                <img
                  src="../src/assets/images/jeu-survie-max.png"
                  alt="survie"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[8vw] w-[8vw] z-50">
              <button type="button" onClick={apprendre}>
                <img
                  src="../src/assets/images/jeux-educ-max.png"
                  alt="apprendre"
                />
              </button>
            </div>
            <div className="m-auto rounded-xl h-[8vw] w-[8vw] z-50">
              <button type="button" onClick={explication}>
                <img
                  src="../src/assets/images/survie-max.png"
                  alt="explication"
                />
              </button>
            </div>
          </div>
        )}
        {isActive && (
          <MessageIA
            chiffre={chiffre}
            setChiffre={setChiffre}
            alphabet={alphabet}
            setAlphabet={setAlphabet}
            educatif={educatif}
            setEducatif={setEducatif}
            IASurvie={IASurvie}
          />
        )}
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default IA;
