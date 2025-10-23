import { Suspense, useEffect, useState } from "react";
import { Spinner } from "../../../utils/Buttons";
import CoursesDesktop from "./CoursesDesktop";
import CoursesMobile from "./CoursesMobile";

const Courses = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Mostrar imágenes */}
      <Suspense fallback={<Spinner />}>
        {isMobile ? <CoursesMobile /> : <CoursesDesktop />}
      </Suspense>
    </>
  );
};

export default Courses;
