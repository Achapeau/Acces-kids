import ButtonSpeakerModal from "./ButtonSpeakerModal";
const doubtful = "../../src/assets/images/perplexe.png";

function NumberLoose({ setLoosing }) {
  const handleClick = () => {
    setLoosing(false);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 backdrop-blur-md" />
      </button>
      <div className="flex flex-col items-center justify-around w-[544px] h-[383px] max-[1000px]:h-[250px] max-[1000px]:w-[400px] bg-almostWhite z-20 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <img
          src={doubtful}
          alt="two kids doing checkmate"
          className="w-[224px] mt-5 -translate-x-20"
        />
        <div className="absolute top-10 right-20">
          <ButtonSpeakerModal
            text={`Tu t'es trompé..., la prochaine fois sera la bonne!`}
          />
        </div>
      </div>
    </>
  );
}

export default NumberLoose;
