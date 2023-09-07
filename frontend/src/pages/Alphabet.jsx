import { useEffect, useState } from "react";
import axios from "axios";

import speaker from "../assets/images/speaker.svg";
import ModalAnimal from "../components/ModalAnimal";

function Alphabet() {
  const [animals, setAnimals] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const openConnectionModal = () => {
    window.connection.showModal();
  };

  function randomSize(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  }

  console.log(randomSize([52, 56, 60, 64]));

  useEffect(() => {
    axios
      .get("http://localhost:8000/alphabet")
      .then((response) => {
        setAnimals(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="bg-blue">
      <div className="mx-11">
        <div className="flex justify-center py-10">
          <h1 className="text-5xl text-pink">Apprends l&apos alphabet</h1>
          <img src={speaker} alt="speaker" className="w-10 items-center ml-6" />
        </div>
        {isLoading ? (
          <h1>Chargement en cours</h1>
        ) : (
          <div className="">
            <div className="grid grid-cols-5">
              {animals.map((elem) => (
                <div key={elem.id}>
                  <img
                    src={`../src/assets/images/${elem.image_animal}`}
                    className="self-center"
                    onClick={openConnectionModal}
                  />
                  <ModalAnimal
                    image={animals.image_animal}
                    name={animals.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Alphabet;
