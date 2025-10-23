import { Link } from "react-router-dom";
import CertGirl from "/assets/RightSideCert.webp";

function ApprovedRegister() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="modal-overlay p-5">
          <div className="modal flex flex-col justify-center items-center">
            <div className="modal-content py-4 px-5 sm:py-12 sm:px-12 text-center font-montserrat-regular">
              <h1 className="text-[#003D78] font-montserrat-bold text-4xl">
                ¡Enhorabuena!
                <br />
              </h1>
              <hr className="m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-full sm:w-auto h-2 mt-2" />
              <p className="mt-8 mb-8 font-montserrat-regular text-lg">
                Tu registro ha sido exitoso
              </p>
              <p className="font-montserrat-regular text-lg mb-4">
                Ahora puedes iniciar sesión dando click en el siguiente botón
              </p>
              <Link
                to="/login"
                className="border border-[#003D78] bg-white rounded-full py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold hover:bg-[#003D78] hover:text-white"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
          <img
            src={CertGirl}
            alt="Image"
            className="w-full hidden md:block md:w-[50%] -ml-24 mt-[82px]"
          />
        </div>
      </div>
    </>
  );
}

export default ApprovedRegister;
