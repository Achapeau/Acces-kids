import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import speaker from "../assets/images/Speaker.png";

function ButtonSpeakerModal({ text }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      startSpeech();
    } else {
      stopSpeech();
    }
  }, [isPlaying]);

  const startSpeech = () => {
    if ("speechSynthesis" in window) {
      const sp = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();

      if (voices.length > 0) {
        sp.voice = voices[0];
      }

      speechSynthesis.speak(sp);
      setSpeech(sp);
    } else {
      alert(
        "La synthèse vocale n'est pas prise en charge par votre navigateur."
      );
    }
  };

  const stopSpeech = () => {
    if (speech) {
      speechSynthesis.cancel();
      setSpeech(null);
    }
    setIsPlaying(false);
  };

  return (
    <div className="">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-fit h-[5rem] m-[0rem]"
      >
        <img src={speaker} className="h-14" alt="icone speaker" />
      </button>
    </div>
  );
}

ButtonSpeakerModal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSpeakerModal;
