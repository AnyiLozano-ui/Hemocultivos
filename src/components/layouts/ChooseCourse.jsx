import PropTypes from "prop-types";
import Hemocultivos from "/assets/Hemoculti.png";
import { BlueFooter } from "./Footers";
import { Link } from "react-router-dom";

function ChooseModal({ onClose }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[#003D78]/70 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-1 overflow-hidden relative max-w-screen-xl w-full">
          <h1 className="font-montserrat-bold text-xl md:text-3xl -mt-[10px] -mx-[20px] text-[#003D78] text-center py-5">
            Educación médica
          </h1>
          <div className="relative py-4 px-5 md:py-12 md:px-4 font-montserrat-regular border border-[#003D78] rounded-lg">
            <div className="flex md:flex-col w-[40%] content-center items-center">
              <div className="font-montserrat-regular text-center text-sm md:text-base">
                <Link to="/welcome-col">
                  <img
                    src={Hemocultivos}
                    alt="Hemocultivos"
                    draggable="false"
                  />
                  <span className="text-center align-middle justify-center content-center">
                    Buenas prácticas <br />
                    en hemocultivos
                  </span>
                </Link>
              </div>
            </div>

            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className="absolute top-0 -right-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border text-black border-gray-300 bg-gradient-to-r from-[#FFDF05] from-35% via-[#369537] to-[#369537]"
            >
              <span className="block w-6 h-6 rounded-full text-center content-center align-middle justify-center text-[#2C2C2C] font-montserrat-bold">
                X
              </span>
            </button>
          </div>
        </div>
      </div>
      <BlueFooter />
    </>
  );
}

ChooseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChooseModal;
