import { Link } from "react-router-dom";
import { NormalHeader } from "../../layouts/Headers";
/* Import Images */
import Sujeto1 from "/assets/Sujeto1.jpg";

export default function Home() {
  function handleImageError(e) {
    e.target.style.display = "none";
  }

  return (
    <>
      <NormalHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-img">
        <div className="">
          <img src={Sujeto1} onError={handleImageError} draggable="false" />
        </div>
        <div className="md:mt-[60px] ml-4 -mt-24 md:mb-0 md:ml-12 font-montserrat-bold text-5xl md:text-[82px] tracking-normal">
          Buenas
          <br /> prácticas en hemocultivos
          <div className="bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-[80%] h-[10px] mb-12 md:mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-40 font-montserrat-regular gap-12 md:w-full mm w-[75%] px-4">
            <Link
              to="/register"
              className="md:text-[24px] text-base text-center border border-[#003D78] px-10 py-6 md:px-[48px] md:py-[24px] rounded-full shadow-xl"
            >
              Regístrate
            </Link>

            <Link
              to="/login"
              className="md:text-[24px] text-base text-center border border-[#003D78] px-10 py-6 md:px-[48px] md:py-[24px]  rounded-full shadow-2xl"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
        <div className="font-montserrat-light flex justify-end md:flex md:justify-end text-sm text-[#003D78]">
          Actualizado en 2024
        </div>
      </div>
    </>
  );
}
