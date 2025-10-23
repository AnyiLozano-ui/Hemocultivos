import PropTypes from "prop-types";
import { WhiteFooter } from "./Footers";
import Repeat from "/assets/buttons/Repeat.jpg";

function Modal({ onClose, attempts, score }) {
  function handleImageError(e) {
    e.target.style.display = "none";
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h1 className="font-montserrat-bold text-xl md:text-3xl -mt-[10px] -mx-[20px] text-white bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] text-center py-5">
            Inténtalo de nuevo
          </h1>
          <div className="modal-content py-4 px-5 sm:py-12 sm:px-40 text-center font-montserrat-regular">
            <p className="mt-8 mb-12">Retroalimentación...</p>
            <div className="font-montserrat-bold text-xl">
              Esta fue tu calificación {score}
              {attempts < 1 ? (
                <p>
                  Te quedaste sin intentos.
                  <br /> Vuelve a intentarlo en 10 minutos.
                </p>
              ) : (
                <p>
                  No te preocupes
                  <br /> puedes intentarlo {attempts} más...
                </p>
              )}
            </div>
          </div>
          <button className="flex mm pb-12" onClick={onClose}>
            <img
              src={Repeat}
              alt="Repeat"
              className="w-[64px] h-[64px]"
              onError={handleImageError}
            />
          </button>
        </div>
      </div>
      <WhiteFooter />
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  attempts: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Modal;
