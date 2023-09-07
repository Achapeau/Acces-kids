import { Link } from "react-router-dom";

import fleche from "../assets/images/flèche_gauche.png";

function MenuReturnButton() {
    return (    
        <Link to="/">
        <div className="flex">
      <button className="w-[5rem] max-[1000px]:w-[5em] max-[1000px]:leading-4 h-[5rem] max-[1000px]:h-[2em] text-greenDark text-3xl max-[1000px]:text-base font-text m-[2rem] max-[1000px]:m-[1em] flex">
        <img src={fleche} alt="flèche qui part vers la gauche" className="m-2 max-[1000px]:m-[0.2em] max-[1000px]:h-[2em]" />
        <p>Retour Menu</p>
      </button>
      </div>
      </Link>
    );
  }
  
  export default MenuReturnButton;

