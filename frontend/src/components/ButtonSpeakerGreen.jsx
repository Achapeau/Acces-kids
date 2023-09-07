import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import speaker from "../assets/images/Speaker.png";

function ButtonSpeakerGreen({ text }) {
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
    if ('speechSynthesis' in window) {
      const sp = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();

      if (voices.length > 0) {
        sp.voice = voices[1];
      }

      speechSynthesis.speak(sp);
      setSpeech(sp);
    } else {
      alert("La synthèse vocale n'est pas prise en charge par votre navigateur.");
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
      <button onClick={() => setIsPlaying(!isPlaying)} className="w-fit h-[2rem] m-[0rem]">
        <img src={speaker} alt="icone speaker" className="object-contain" />
      </button>
    </div>
  );
}

ButtonSpeakerGreen.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSpeakerGreen;
