const bravo = "../../src/assets/images/bravo.png";
const speaker = "../../src/assets/images/Speaker_green.png";

function NumberWin({ number, setWinning, restartGame }) {
  const handleWin = () => {
    setWinning(false);
    restartGame();
  };

  return (
    <>
      <button type="button" onClick={handleWin}>
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 backdrop-blur-md" />
      </button>
      <div className="flex flex-col items-center justify-around w-[544px] h-[383px] bg-almostWhite z-20 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <img
          src={bravo}
          alt="two kids doing checkmate"
          className="w-[224px] mt-5 -translate-x-20"
        />
        <div className="flex">
          <h1 className="font-heading text-8xl text-pink mx-5">
            {number.number}
          </h1>
          <h1 className="font-heading text-8xl  text-yellow mb-5">
            {number.text}
          </h1>
        </div>
        <img src={speaker} className="w-[100px] absolute top-10 right-10" />
      </div>
    </>
  );
}

export default NumberWin;
