/* Importación de imágenes */
import { useState } from "react";
import NavbarMob from "/assets/NavbarMB.webp";
import Logo from "/assets/Logo.webp";
import Biome from "/assets/RightLogo.webp";
import MenuBurger from "/assets/buttons/MenuBurger.webp";
import { Link } from "react-router-dom";

function handleImageError(e) {
  e.target.style.display = "none";
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <nav>
          <div className="grid grid-cols-2 lg:flex mt-2 justify-between items-start gap-44 xl:gap-80">
            <div className="mb-11 mt-3 ml-auto md:ml-32">
              <img
                src={Logo}
                alt="Better Blood Culture Logo"
                onError={handleImageError}
                className="w-full ml-12 md:ml-2 md:w-44"
                width="auto"
                height="auto"
              />
            </div>
            <div className="mr-8">
              <img
                src={Biome}
                alt="Biomérieux"
                onError={handleImageError}
                className="w-24 mt-4 z-10 md:w-44"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </nav>
        <div className="bg-[#003D78] w-full h-[70px] -z-50 -mt-10 md:-mt-14">
          <div className="dropdown">
            <button className="ml-12 md:ml-32 mt-2" onClick={toggleMenu}>
              <img
                src={MenuBurger}
                alt="BurgerMenu"
                className="w-10 md:w-12 mt-2"
                width="auto"
                height="auto"
              />
            </button>
            {isOpen && (
              <div className="dropdown-content ml-12 md:ml-32 rounded-bl-2xl rounded-br-2xl border grid grid-cols-1 divide-y-[1.5px] divide-[#003D78] font-montserrat-light text-[#003D78]">
                <Link to="/cursos-teoricos">Curso teórico</Link>
                <Link to="/cursos-practicos">Curso práctico</Link>
                <Link to="/quiz">Quiz</Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export const NormalHeader = () => {
  return (
    <>
      <header>
        <nav>
          <div className="grid grid-cols-2 lg:flex mt-2 justify-between items-start gap-44 xl:gap-80">
            <div className="mb-11 mt-3 ml-auto md:ml-32">
              <img
                src={Logo}
                alt="Better Blood Culture Logo"
                onError={handleImageError}
                className="w-full ml-12 md:ml-2 md:w-44"
                width="auto"
                height="auto"
              />
            </div>
            <div className="mr-8">
              <img
                src={Biome}
                alt="Biomérieux"
                onError={handleImageError}
                className="w-24 mt-4 z-10 md:w-44"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </nav>
        <div className="bg-[#003D78] w-full h-[70px] -z-50 -mt-10 md:-mt-14"></div>
      </header>
    </>
  );
};

export const MainHeader = () => {
  return (
    <>
      <header>
        <nav>
          <div className="grid grid-cols-2 lg:flex mt-2 justify-between items-start gap-44 xl:gap-80">
            <div className="mb-7 mt-3 ml-auto md:ml-32"></div>
            <div className="mr-8">
              <img
                src={Biome}
                alt="Biomérieux"
                onError={handleImageError}
                className="w-24 mt-1 z-10 float-right md:w-32"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </nav>
        <div className="bg-[#003D78] w-full h-[70px] -z-50 -mt-10 md:-mt-14">
          <h1 className="text-white font-montserrat-bold md:pt-4 pl-4 mt-3 md:text-3xl pt-7 text-base">
            PLATAFORMA DE EDUCACIÓN CONTINUADA
          </h1>
        </div>
      </header>
    </>
  );
};

export const MainHeader2 = () => {
  return (
    <>
      <header>
        <nav>
          <div className="grid grid-cols-2 lg:flex mt-2 justify-between items-start gap-44 xl:gap-80">
            <div className="mb-7 mt-3 ml-auto md:ml-32"></div>
            <div className="mr-8">
              <img
                src={Biome}
                alt="Biomérieux"
                onError={handleImageError}
                className="w-24 mt-1 z-10 float-right md:w-32"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </nav>
        <div className="bg-[#003D78] w-full h-[70px] -z-50 -mt-10 md:-mt-14"></div>
      </header>
    </>
  );
};

export const HeaderMobile = () => {
  return (
    <>
      <nav>
        <header>
          <img
            src={NavbarMob}
            alt="Header"
            onError={handleImageError}
            draggable="false"
            className="w-full"
            width="auto"
            height="auto"
          />
        </header>
      </nav>
    </>
  );
};
