import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuthService from "../../services/auth.service";
import Cert from "/assets/ButtonCert.jpg";
import CertGirl from "/assets/RightSideCert.webp";
import { pdfmd } from "../../utils/ContentLinks";

function ApprovedModal({ onClose, score }) {
  const { user } = useAuthService();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const secondCertButton = () => {
    const certCol1 = `${import.meta.env.VITE_SERVER_GENERAL_API}/certcol/${
      user.user?.name
    }/${formattedDate}`;
    const certCol2 = `${import.meta.env.VITE_SERVER_GENERAL_API}/certcol2/${
      user.user?.name
    }/${formattedDate}`;
    if (user.user?.country === "Colombia") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center font-montserrat-semibold mb-4">
          <button className="">
            <Link to={certCol1}>
              <img
                src={Cert}
                alt="Log Cert"
                className="mm w-16 h-16"
                onError={handleImageError}
                width="0"
                height="0"
              />
            </Link>
            <p>Certificado Teórico</p>
          </button>

          <button className="">
            <Link to={certCol2}>
              <img
                src={Cert}
                alt="Log Cert"
                className="mm w-16 h-16"
                onError={handleImageError}
                width="0"
                height="0"
              />
            </Link>
            <p>Certificado Práctico</p>
          </button>
        </div>
      );
    } else {
      const certLink = `${import.meta.env.VITE_SERVER_GENERAL_API}/cert/${
        user.user?.name
      }/${user.user?.country}/${user.user?.document}/${user.user?.institution}`;
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="font-montserrat-semibold mb-4">
              <Link to={certLink}>
                <img
                  src={Cert}
                  alt="Log Cert"
                  className="mm w-16 h-16"
                  onError={handleImageError}
                  width="0"
                  height="0"
                />
              </Link>
              <p>Descargar certificado</p>
            </button>

            <button className="font-montserrat-semibold mb-4">
              <Link to={pdfmd} target="_blank">
                <img
                  src={Cert}
                  alt="Log Cert"
                  className="mm w-16 h-16"
                  onError={handleImageError}
                  width="0"
                  height="0"
                />
              </Link>
              <p>
                Clic aquí para descargar
                <br /> la guía de manejo diaria
              </p>
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="modal-overlay">
          <div className="modal flex flex-col justify-center items-center">
            <button
              className="flex text-start font-montserrat-extrabold mt-2"
              onClick={onClose}
            >
              Cerrar ventana
            </button>
            <div className="modal-content py-4 px-5 sm:py-12 sm:px-12 text-center font-montserrat-regular">
              <h1 className="text-[#003D78] font-montserrat-bold text-4xl">
                ¡Felicitaciones!
                <br />
                <span className="mt-2">{user.user?.name}</span>
              </h1>
              <hr className="m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-full sm:w-auto h-2 mt-2" />
              <p className="mt-8 mb-8 font-montserrat-regular text-lg">
                Has finalizado el curso con éxito.
                <br />
                Esta ha sido tu calificación {score}
              </p>
              <p className="font-montserrat-regular text-lg mb-3">
                Ahora puedes descargar tu certificación
                <br /> haciendo clic en el siguiente botón
              </p>
            </div>

            {secondCertButton()}
          </div>
          <img
            src={CertGirl}
            alt="Image"
            className="absolute -bottom-8 md:bottom-0 md:static w-full md:w-[50%] md:-ml-24 md:mt-[42px] -mb-4"
            width="0"
            height="0"
          />
        </div>
      </div>
    </>
  );
}

ApprovedModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default ApprovedModal;
