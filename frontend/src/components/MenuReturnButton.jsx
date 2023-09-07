import { Link } from "react-router-dom";

import fleche from "../assets/images/flèche_gauche.png";

function MenuReturnButton() {
  return (
    <div className="">
      <Link to="/">
        <div className="flex">
          <button className="w-[5rem] h-[5rem] max-[1000px]:w-[3rem] max-[1000px]:h-[3rem] text-greenLight text-3xl max-[1000px]:text-2xl font-text rounded-full m-[2rem] flex">
            <img
              src={fleche}
              alt="flèche qui part vers la gauche"
              className="m-2"
            />
            <p>Retour Menu</p>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default MenuReturnButton;
