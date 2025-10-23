import { useDispatch } from "react-redux";
import { logoutUser } from "../../../utils/axios";
import { Header } from "../../layouts/Headers";
import { Link } from "react-router-dom";

export default function PracticalCourses() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Header />
      <div className="bg-img">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4"></div>
          <div className="px-4 md:px-10 w-full md:w-3/4 pr-2 md:pr-24">
            <section className="text-center">
              <div className="flex justify-end mt-3">
                <button
                  onClick={handleLogout}
                  className="border border-[#003D78] hover:bg-[#003D78] hover:text-white bg-white rounded-full text-sm md:text-xl py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold"
                >
                  Cerrar sesión
                </button>
              </div>

              <div>
                <h1 className="mt-4 text-2xl sm:text-5xl text-center md:text-start font-montserrat-bold bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] text-transparent bg-clip-text">
                  Estos son los vídeos que encontrarás en este curso
                </h1>

                <hr className="content-center m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-3/4 md:w-full h-[10px] mb-8" />

                <h1 className="font-montserrat-regular text-2xl mb-8 text-center md:text-start ">
                  Buenas prácticas y toma de muestras de hemocultivos
                </h1>
              </div>
            </section>

            <ul className="font-montserrat-regular list-inside list-decimal md:text-lg text-sm">
              <li><Link to="/preparacion-hc" className="hover:underline">Preparación de HC (winged set and needle syringe)</Link></li>
              <li><Link to="/recogida-palomilla" className="hover:underline">Recogida palomilla</Link></li>
              <li><Link to="/recogida-aguja-jeringuilla" className="hover:underline">Recogida aguja jeringuilla</Link></li>
              <li><Link to="/recogida-dispositivos-permanentes" className="hover:underline">Recogida dispositivos permanentes</Link></li>
            </ul>
          </div>
        </div>
        <div className="font-montserrat-light fixed bottom-2 right-2 text-sm text-[#003D78]">
          Actualizado en 2024
        </div>
      </div>
    </>
  );
}
