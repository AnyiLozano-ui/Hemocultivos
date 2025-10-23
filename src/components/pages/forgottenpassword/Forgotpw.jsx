import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { passwordRecov } from "../../../utils/axios";
import { useDispatch } from "react-redux";
import Sujeto2 from "/assets/Sujeto2.jpg";
import { NavigationButtons } from "../../layouts/NavigationButtons";
import "./Forgotpw.css";
import { NormalHeader } from "../../layouts/Headers";
import { Spinner } from "../../../utils/Buttons";

const ForgottenPW = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const [passwordRecover, setPasswordRecover] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setPasswordRecover((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      await dispatch(passwordRecov(passwordRecover, navigate));
      setIsPasswordReset(true);
      setIsLoading(false);
    },
    [dispatch, passwordRecover, navigate]
  );

  const handleImageError = useCallback((e) => {
    e.currentTarget.style.display = "none";
  }, []);

  return (
    <>
      <NormalHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src={Sujeto2}
            onError={handleImageError}
            draggable="false"
            className="w-[100%] h-[100%]"
            alt="Imagen del sujeto"
          />
        </div>
        <div className="bg-[#003D78] sm:rounded-bl-[200px] rounded-tl-[100px] sm:rounded-tl-[0px] w-[88%] mm p-6 sm:h-[88%] 2xl:w-[86%] sm:-mt-2 2xl:px-10 2xl:py-5 lg:px-2 xl:py-5 md:h-full">
          <h1 className="mt-10 text-center font-montserrat-bold text-[28px] sm:text-[48px] text-[#ffffff]">
            ¿Olvidaste tu contraseña?
          </h1>
          <div className="content-center m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-[75%] h-[10px]" />

          <div className="mt-20 font-montserrat-thin">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="flex flex-col items-center">
                <label
                  htmlFor="email"
                  className="mb-2 text-left text-xl sm:text-3xl  text-[#ffffff]"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={passwordRecover.email}
                  onChange={handleChange}
                  className="rounded-lg w-[76%] h-[48px] px-4 py-2"
                  placeholder="nombre@empresa.com"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col items-center">
                <label
                  htmlFor="password"
                  className="mb-2 text-left text-xl sm:text-3xl  text-[#ffffff]"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={passwordRecover.password}
                  onChange={handleChange}
                  className="rounded-lg w-[76%] h-[48px] px-4 py-2 pr-10"
                  placeholder="************"
                />
              </div>
              <button
                type="submit"
                className="flex items-center mm sm:text-[24px] mt-16 text-[#003D78] bg-[#ffffff]  border border-[#003D78] px-[36px] py-[18px] mb-5 rounded-full shadow-2xl"
              >
                {isLoading ? <Spinner /> : "Reestablecer contraseña"}
              </button>
            </form>
            {isPasswordReset && ( // Mostrar el mensaje solo cuando la contraseña se haya restablecido con éxito
              <div className="text-[#55C2E4] text-center">
                ¡La contraseña se ha restablecido con éxito!
              </div>
            )}
            <div className="text-[#ffffff] text-center text-sm sm:text-md mt-6">
              <div>
                Manejo de{" "}
                <a
                  href="https://elearningeducacionmedica.com/archivos/habeas-data-biomerieux.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55C2E4]"
                >
                  Habeas Data
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="font-montserrat-light flex justify-end mt-2 text-sm text-[#003D78]">
          Actualizado en 2024
        </div>
      </div>
      <NavigationButtons />
    </>
  );
};

export default ForgottenPW;
