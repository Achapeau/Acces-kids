import { useEffect, useState } from "react";
import axios from "axios";

import speaker from "../assets/images/speaker.svg";

function Alphabet() {
  const [animals, setAnimals] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      <h1>Apprends l'alphabet</h1>
      <img src={speaker} alt="speaker" className="w-6" />
      {isLoading ? (
        <h1>Chargement en cours</h1>
      ) : (
        <div>
          <h1>TEST</h1>
        </div>
      )}
    </div>
  );
}

export default Alphabet;
