import PropTypes from "prop-types";

import ButtonSpeakerOrange from "./ButtonSpeakerOrange";

const ModalAnimal = ({ animal, setOpenModal }) => {
  return (
    <div>
      <button type="button" onClick={() => setOpenModal(false)}>
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 backdrop-blur" />
      </button>
      <div className="flex place-content-center items-center w-[700px] h-[383px] bg-almostWhite z-20 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-lg mx-4 max-[1000px]:w-[600px] max-[1000px]:h-[300px]">
        <img
          src={`../src/assets/images/${animal.image_animal}`}
          alt={animal.name}
          className="w-60"
        />
        <div className="flex">
          <h1 className="font-heading text-9xl text-yellow pl-6">
            {animal.name.charAt(0)}
            <span className="text-6xl">{animal.name.slice(1, 30)}</span>
          </h1>
        </div>
        <div className="-mt-60">
          <ButtonSpeakerOrange
            text={`${animal.corresponding_letter} comme ${animal.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalAnimal;

ModalAnimal.propTypes = {
  animal: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
