import { useState } from "react";
import Sujeto3 from "/assets/Sujeto3.webp";
import HiddenPW from "/assets/buttons/Hide.svg";
import ShowPW from "/assets/buttons/Show.svg";
import { NavigationButtons } from "../../layouts/NavigationButtons";
import { NormalHeader } from "../../layouts/Headers";
import { countries } from "../../../utils/Countries.json";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../utils/axios";
import { Spinner } from "../../../utils/Buttons";
import ApprovedRegister from "../../layouts/ApprovedRegister";

const Register = () => {
  const dispatch = useDispatch();

  const [visiblePassword, setVisiblePassword] = useState(null);
  const [visiblePassword2, setVisiblePassword2] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    document: "",
    phone: "",
    institution: "",
    country: "",
    profession: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const togglePassword = () => {
    setVisiblePassword((prevState) => !prevState);
  };

  const togglePassword2 = () => {
    setVisiblePassword2((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await dispatch(registerUser(registerData));
      setIsLoading(false);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageError = (e) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <>
      <NormalHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div style={{ maxWidth: "100%", height: "auto" }}>
          <img
            src={Sujeto3}
            onError={handleImageError}
            draggable="false"
            className="w-full"
            alt="Imagen del sujeto"
          />
        </div>
        <div className="bg-[#003D78] sm:rounded-bl-[200px] rounded-tl-[100px] sm:rounded-tl-[0px] w-[88%] mm p-6 sm:h-[88%] 2xl:w-[86%] sm:-mt-2 2xl:px-10 2xl:py-5 lg:px-2 xl:py-5 md:h-full">
          <h1 className="mt-10 text-center font-montserrat-bold text-[28px] sm:text-[48px] text-[#ffffff]">
            Completa el formulario
          </h1>
          <hr className="content-center m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-[100%] h-[10px]" />
          <div className="mt-12 font-montserrat-thin">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 px-2 sm:px-7 items-center"
            >
              <input
                type="text"
                name="name"
                className="w-full rounded-full py-4 px-3 "
                placeholder="Nombre y apellidos completos *"
                autoComplete="name family-name"
                value={registerData.name}
                onChange={handleChange}
                required
              />
              <div className="w-full grid grid-cols-2 space-x-4">
                <input
                  type="number"
                  name="document"
                  className="rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[8px]"
                  placeholder="Documento de identificación *"
                  autoComplete="off"
                  value={registerData.document}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="phone"
                  className="rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[12px]"
                  placeholder="Teléfono *"
                  autoComplete="tel-national"
                  value={registerData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full grid grid-cols-2 space-x-4 ">
                <input
                  type="text"
                  name="institution"
                  className="rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[12px]"
                  placeholder="Institución *"
                  autoComplete="off"
                  value={registerData.institution}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="profession"
                  className="rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[12px]"
                  placeholder="Profesión *"
                  autoComplete="tel-national"
                  value={registerData.profession}
                  onChange={handleChange}
                  required
                />
              </div>
              <label>Seleccione el país *</label>
              <select
                name="country"
                className="w-full rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[12px]"
                autoComplete="off"
                value={registerData.country}
                onChange={handleChange}
                required
              >
                <option disabled className="text-[#A9A9AC] hidden" value="">
                  Seleccione el país *
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <input
                type="email"
                name="email"
                className={`w-full rounded-full py-4 px-3 placeholder:sm:text-[16px] placeholder:text-[12px] ${
                  registerData.email && !validateEmail(registerData.email)
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Correo electrónico *"
                autoComplete="email"
                value={registerData.email}
                onChange={handleChange}
                required
              />

              {registerData.email && !validateEmail(registerData.email) && (
                <p className="text-red-500 text-sm mt-1">
                  Por favor, introduce un correo electrónico válido.
                </p>
              )}

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="relative">
                  <input
                    name="password"
                    type={visiblePassword ? "text" : "password"}
                    value={registerData.password}
                    className="pl-4 w-full py-2 rounded-full h-12"
                    placeholder="Contraseña *"
                    onChange={handleChange}
                    required
                  />
                  <button type="button" onClick={togglePassword}>
                    {visiblePassword ? (
                      <img
                        src={HiddenPW}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-8"
                        alt="Ocultar"
                      />
                    ) : (
                      <img
                        src={ShowPW}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-8"
                        alt="Ocultar"
                      />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <input
                    name="confirm_password"
                    type={visiblePassword2 ? "text" : "password"}
                    value={registerData.confirm_password}
                    className="pl-4 w-full py-2 rounded-full h-12"
                    placeholder="Confirmar contraseña *"
                    onChange={handleChange}
                    required
                  />
                  <button type="button" onClick={togglePassword2}>
                    {visiblePassword2 ? (
                      <img
                        src={HiddenPW}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-8"
                        alt="Ocultar"
                      />
                    ) : (
                      <img
                        src={ShowPW}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-8"
                        alt="Ocultar"
                      />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center mm sm:text-[24px] mt-16 text-[#003D78] bg-[#ffffff]  border border-[#003D78] px-[36px] py-[18px] mb-5 rounded-full shadow-2xl"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : "Registrarse"}
              </button>
            </form>
          </div>
        </div>
        <div className="font-montserrat-light flex justify-end mt-2 md:flex md:justify-end text-sm text-[#003D78]">
          Actualizado en 2024
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <NavigationButtons />
      </div>
      {success && <ApprovedRegister />}
    </>
  );
};

export default Register;
