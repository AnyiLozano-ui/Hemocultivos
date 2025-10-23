import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LeftButton, RightButtonDisabled } from "../../../utils/Buttons";
import { logoutUser } from "../../../utils/axios";
import { Header } from "../../layouts/Headers";
import HomeButton from "/assets/buttons/Home.webp";
import video4 from "/assets/videos/04.mp4";

export default function PracticalCoursesFour() {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const playlist = [video4];
  const [currentVideoIndex] = useState(0);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleShowNextButton = () => {
    if (currentVideoIndex === playlist.length - 1) {
      return (
        <button
          onClick={() => (window.location.href = "/quiz")}
          className="border border-[#003D78] hover:bg-[#003D78] hover:text-white bg-white rounded-full text-sm mt-3 md:text-xl py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold"
        >
          Clic aquí para continuar con el quiz
        </button>
      );
    }
    return null;
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
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

              <div className="">
                <h1 className="mt-4 text-2xl sm:text-5xl text-center md:text-start font-montserrat-bold bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] text-transparent bg-clip-text">
                  Curso práctico
                </h1>

                <hr className="content-center m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-3/4 md:w-full h-[10px] mb-8" />

                <h1 className="font-montserrat-regular text-2xl mb-8 text-center md:text-start ">
                  Recogida dispositivos permanentes
                </h1>

                <div>
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    src={playlist[currentVideoIndex]}
                  ></video>
                  <div className="text-[#999999] text-xs text-center font-montserrat-thin">
                    Material dirigido al cuerpo médico
                  </div>
                </div>
                {handleShowNextButton()}
              </div>

              <div className="space-x-7 flex flex-row mm items-center justify-center md:mt-5">
                <Link
                  to="/cursos-practicos"
                  className="conButton border border-[#003D78] bg-white rounded-full "
                >
                  <img
                    src={HomeButton}
                    alt="Home button"
                    onError={handleImageError}
                    className="imgButton"
                  />
                </Link>

                <Link
                  to="/cursos-practicos/recogida-aguja-jeringuilla"
                  className="conButton border border-[#003D78] bg-white rounded-full "
                >
                  <LeftButton />
                </Link>

                <Link
                  to="/cursos-practicos/recogida-dispositivos-permanentes"
                  className="conButton border border-[#003D78] bg-white rounded-full "
                >
                  <RightButtonDisabled />
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div className="font-montserrat-light fixed bottom-2 right-2 text-sm text-[#003D78]">
          Actualizado en 2024
        </div>
      </div>
    </>
  );
}
