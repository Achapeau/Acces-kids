import { useNavigate } from "react-router-dom";
import react from "react"

function ButtonIA() {
  const navigate = useNavigate()
  const handleIa = () => {
    navigate("/ia")
  }
  return (
    <div className="absolute right-1 top-20">
    <button className="w-[5rem] h-[5rem] bg-greenLight text-almostWhite text-4xl font-heading rounded-full border-solid border-almostWhite border-[0.6rem] m-[2rem]"
            onClick={handleIa} >
      ?
    </button>
  </div>
  );
}

export default ButtonIA;
