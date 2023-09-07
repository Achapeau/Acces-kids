import speaker from "../../public/icons/Speaker.png";

function JeuNombres() {
  const numbers = [
    { number: 1, color: "almostWhite" },
    { number: 2, color: "greenDark" },
    { number: 3, color: "pink" },
    { number: 4, color: "yellow" },
    { number: 5, color: "almostWhite" },
    { number: 6, color: "greenDark" },
    { number: 7, color: "pink" },
    { number: 8, color: "yellow" },
    { number: 9, color: "almostWhite" },
    { number: 10, color: "greenDark" },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className="flex items-center">
        <h1 className="text-pink text-5xl font-heading my-10">
          Apprend à compter
        </h1>
        <img src={speaker} className="h-15 ml-10 translate-y-2" />
      </div>
      <div>Images animaux</div>

      <div>
        {numbers.map((elem) => (
          <button>
            <h1 className={`text-${elem.color} text-8xl px-5`}>
              {elem.number}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
}

export default JeuNombres;
