import { useState } from "react";

const ModalAnimal = ({ image, name }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("modal_animal").showModal()}
      >
        open modal
      </button>
      <dialog id="modal_animal" className="modal">
        <div className="modal-box flex">
          <img src={`../src/assets/images/elephant.png`} className="w-52" />
          <h1 className="text-7xl">Éléphant</h1>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalAnimal;
