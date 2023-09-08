import { useEffect, useState } from "react";
import axios from "axios";

import ModalAnimal from "../components/ModalAnimal";
import ButtonSpeakerOrange from "../components/ButtonSpeakerOrange";
import MenuReturnButton from "../components/MenuReturnButton";
import Button_ia from "../components/Button_ia";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Alphabet() {
  const [animals, setAnimals] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [animalSelected, setAnimalSelected] = useState({});

  useEffect(() => {
    axios
      .get(`${backendUrl}/alphabetgame`)
      .then((response) => {
        setAnimals(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="px-11">
      <div className={openModal ? "blur bg-blue h-[85vh]" : "blur-none"}>
        <div className="flex justify-center pt-4 pb-10">
          <div className="absolute -top-20 right-[-5%]">
            <Button_ia />
          </div>
          <div className="absolute -top-5 -left-20">
            <MenuReturnButton />
          </div>
          <h1 className="text-5xl text-pink mr-6">Apprends l&apos;alphabet</h1>
          <div className="mt-3">
            <ButtonSpeakerOrange text="Apprends l'alphabet" />
          </div>
        </div>
        {isLoading ? (
          <h1>Chargement en cours</h1>
        ) : (
          <div className="">
            <div className="grid grid-cols-5 grid-rows-2">
              {animals.map((elem) => (
                <div
                  key={elem.id}
                  className="max-h-64 flex self-center justify-self-center"
                >
                  <img
                    src={`../src/assets/images/${elem.image_animal}`}
                    onClick={() => {
                      setAnimalSelected(elem);
                      setOpenModal(true);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {openModal && (
        <ModalAnimal animal={animalSelected} setOpenModal={setOpenModal} />
      )}
    </main>
  );
}

export default Alphabet;
