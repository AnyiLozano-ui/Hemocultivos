import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  LeftButton,
  LeftButtonDisabled,
  RightButton,
  RightButtonDisabled,
} from "../../../utils/Buttons";
import {
  AudioDataMobile,
  MobileImgData,
} from "../../../utils/PracticalCoursesData";
import { logoutUser } from "../../../utils/axios";
import { Header } from "../../layouts/Headers";
import HomeButton from "/assets/buttons/Home.webp";

export default function CoursesMobile() {
  const dispatch = useDispatch();

  const pageSize = 1;

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = MobileImgData.length; // Total de imágenes

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const paginatedDataMobile = MobileImgData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCurrentImageIndex(pageSize - 1);
    }
  };

  const handleNextImageMobile = () => {
    if (currentImageIndex < paginatedDataMobile.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (currentPage < Math.ceil(MobileImgData.length / pageSize)) {
      setCurrentPage(currentPage + 1);
      setCurrentImageIndex(0);
    } else {
      window.location.href = "/cursos-practicos";
    }
  };

  const disablePreviousButton = currentPage === 1 && currentImageIndex === 0;
  const disableNextButtonMobile =
    currentPage === Math.ceil(MobileImgData.length / pageSize) &&
    currentImageIndex >= paginatedDataMobile.length - 1;

  return (
    <>
      <Header />
      <div className="bg-img">
        <div className="flex flex-col md:flex-row">
          {/* Contenido de la izquierda */}
          <div className="w-full md:w-1/4"></div>
          {/* Contenido principal */}
          <div className="px-4 md:px-10 w-full md:w-3/4 pr-2 md:pr-24">
            <section className="text-center">
              {/* Botón de cerrar sesión */}
              <div className="flex justify-end mt-3">
                <button
                  onClick={handleLogout}
                  className="border border-[#003D78] hover:bg-[#003D78] hover:text-white bg-white rounded-full text-sm md:text-xl py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold"
                >
                  Cerrar sesión
                </button>
              </div>

              {/* Título y descripción del curso */}
              <div className="">
                <h1 className="mt-4 text-2xl sm:text-5xl text-center md:text-start font-montserrat-bold bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] text-transparent bg-clip-text">
                  Curso teórico
                </h1>
                <hr className="content-center m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-3/4 md:w-full h-[10px] mb-8" />
                <h1 className="font-montserrat-regular text-2xl mb-8 text-center md:text-start ">
                  Buenas prácticas y toma de muestras de hemocultivos
                </h1>

                {/* Contenido de la imagen */}
                <div className="mb-4 mm">
                  {/* Mostrar imágenes */}
                  <div className="mb-4 mm">
                    {paginatedDataMobile.map((image) => {
                      const audio = AudioDataMobile.find(
                        (audio) => audio.id === image.id
                      );

                      return (
                        <div key={image.id}>
                          <img
                            src={image.url}
                            alt={`Slide ${image.id}`}
                            className="w-full"
                            onError={handleImageError}
                          />
                          {audio && (
                            <div>
                              <audio
                                controls
                                key={audio.id}
                                className="mx-auto mt-3"
                              >
                                <source src={audio.url} type="audio/x-m4a" />
                                Your browser does not support the audio element.
                              </audio>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contador de imágenes */}
              <div className="text-center mb-4">
                <span className="font-montserrat-bold text-base">
                  {currentImageIndex + 1 + (currentPage - 1) * pageSize}/{totalImages}
                </span>
              </div>

              {/* Botones de navegación y contador de páginas */}
              <div className="space-x-7 flex flex-row mx-auto mt-4 items-center justify-center md:mt-20">
                <Link
                  to="/"
                  className="conButton border border-[#003D78] bg-white rounded-full "
                >
                  <img
                    src={HomeButton}
                    alt="Home button"
                    onError={handleImageError}
                    className="imgButton"
                  />
                </Link>

                <button
                  className="conButton border border-[#003D78] bg-white rounded-full"
                  onClick={handlePreviousImage}
                  disabled={disablePreviousButton}
                >
                  {disablePreviousButton && <LeftButtonDisabled />}
                  {!disablePreviousButton && <LeftButton />}
                </button>

                <button
                  className="conButton border border-[#003D78] bg-white rounded-full"
                  onClick={handleNextImageMobile}
                  disabled={disableNextButtonMobile}
                >
                  {!disableNextButtonMobile && <RightButton />}
                  {disableNextButtonMobile && <RightButtonDisabled />}
                </button>
              </div>
              {/* Pie de página */}
              <div className="font-montserrat-light text-end mr-2 mt-3 text-sm text-[#003D78]">
                Actualizado en 2024
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
