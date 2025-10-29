import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home.jsx";
import Login from "../components/pages/login/Login.jsx";
import Register from "../components/pages/register/Register.jsx";
import Questions from "../components/pages/questions/Questions.jsx";
import Courses from "../components/pages/courses/Courses.jsx";
import PracticalCourses from "../components/pages/practices/PracticalCourses.jsx";
import ForgottenPW from "../components/pages/forgottenpassword/Forgotpw.jsx";
import Index from "../components/Index.jsx";
import ChooseBio from "../components/ChooseBio.jsx";
import PracticalCourses2 from "../components/pages/practices/PracticalCourses2.jsx";
import PracticalCourses3 from "../components/pages/practices/PracticalCourses3.jsx";
import PracticalCourses4 from "../components/pages/practices/PracticalCourses4.jsx";
import PracticalCourses5 from "../components/pages/practices/PracticalCourses5.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/choose" element={<ChooseBio />} />
      <Route path="/welcome-col" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgottenPW />} />

      <Route path="/cursos-teoricos" element={<Courses />} />
      <Route path="/cursos-practicos" element={<PracticalCourses />} />
      <Route path="/preparacion-hc" element={<PracticalCourses2 />} />
      <Route path="/recogida-palomilla" element={<PracticalCourses3 />} />
      <Route path="/recogida-aguja-jeringuilla" element={<PracticalCourses4 />} />
      <Route path="/recogida-dispositivos-permanentes" element={<PracticalCourses5 />} />
      <Route path="/quiz" element={<Questions />} />
    </Routes>
  );
};
