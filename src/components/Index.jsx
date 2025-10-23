import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainHeader } from "./layouts/Headers";
import ColombiaLogo from "/assets/ColombiaMobile.webp";
import PCLatamButton from "/assets/Latam.webp";
import MobileBanner from "/assets/MobileBanner.webp";
import PCBanner from "/assets/PCBanner.webp";

export default function Index() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MainHeader />
      <section>
        <div>
          <img
            src={isMobile ? MobileBanner : PCBanner}
            alt={isMobile ? "Hemocultivos Banner" : "Hemocultivos Banner"}
            className="w-[100%] h-[100%]"
            draggable="false"
            loading="eager"
          />
        </div>

        {isMobile ? (
          <div className="text-center bg-[#1A3F76]">
            <h1 className="font-montserrat-semibold text-white text-4xl">
              Bienvenido/a a bioMérieux
            </h1>
            <p className="text-white font-montserrat-semibold pb-8 px-4 text-sm">
              Conozca más acerca de los cursos que tenemos preparados para
              usted.
            </p>
          </div>
        ) : (
          ""
        )}

        <div>
          <p className="text-[#1A3F76] text-center uppercase mt-3">
            A continuación, escoja el equipo al que pertenece:
          </p>
        </div>

        <div className="flex text-center justify-center align-middle mt-4 px-7 gap-7 font-montserrat-semibold">
          <div>
            <Link to="/choose">
              <img
                src={ColombiaLogo}
                alt="Colombia Logo"
                width={isMobile ? "auto" : 224}
                height={isMobile ? "auto" : 224}
              />
            </Link>
            <span className="uppercase">Colombia</span>
          </div>
          <div>
            <Link to="/choose">
              <img
                src={isMobile ? PCLatamButton : PCLatamButton}
                alt={isMobile ? "Latam Logo" : "PC Latam Button"}
                width={isMobile ? "auto" : 224}
                height={isMobile ? "auto" : 224}
              />
            </Link>
            <div className="uppercase mb-7">
              LATAM
            </div>
          </div>
        </div>
        <div className="content-center fixed bottom-0 bg-gradient-to-r from-[#FFDF05] from-35% via-[#369537] via-79% to-[#369537] w-full h-[10px]" />
      </section>
    </>
  );
}
