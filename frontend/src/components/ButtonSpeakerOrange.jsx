import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import speaker_orange from "../assets/images/SpeakerOrange.png";

function ButtonSpeakerOrange({ text }) {
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
        sp.voice = voices[3];
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
      <button onClick={() => setIsPlaying(!isPlaying)} className="w-fit h-[2rem] max-[1000px]:h-[0.5em] m-[0rem]">
        <img src={speaker_orange} alt="icone speaker" className="object-contain max-[1000px]:h-[1.5em]" />
      </button>
    </div>
  );
}

ButtonSpeakerOrange.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSpeakerOrange;
