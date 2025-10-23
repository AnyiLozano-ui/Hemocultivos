import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../../utils/axios";
import ApprovedModal from "../../layouts/ApprovedModal";
import { Header } from "../../layouts/Headers";
import Modal from "../../layouts/Modal";
import "./Questions.css";

function Questions() {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);

  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 1;
  const [userResponses, setUserResponses] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showApprovedModal, setShowApprovedModal] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [blockUntil, setBlockUntil] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    dispatch(fetchQuestions());

    const savedAttempts = sessionStorage.getItem("remainingAttempts");
    const savedBlockUntil = sessionStorage.getItem("blockUntil");

    if (savedAttempts) {
      setRemainingAttempts(Number(savedAttempts));
    }

    if (savedBlockUntil) {
      setBlockUntil(new Date(savedBlockUntil));
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("remainingAttempts", remainingAttempts);
    if (blockUntil) {
      sessionStorage.setItem("blockUntil", blockUntil.toISOString());
    }
  }, [remainingAttempts, blockUntil]);

  const handleResponseChange = (questionId, optionId) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: optionId,
    }));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const calculateScore = () => {
    const answeredQuestions = Object.keys(userResponses).length;
    if (answeredQuestions === 0) {
      return 0; // Si no se han respondido preguntas, la puntuación es 0
    }

    let correctAnswers = 0;
    questions.forEach((question) => {
      const selectedOptionId = userResponses[question.id];
      if (selectedOptionId !== undefined && question.opciones_pregunta) {
        const selectedOption = question.opciones_pregunta.find(
          (option) => option.id.toString() === selectedOptionId.toString()
        );

        // Depuración: Verificar si la opción es correcta
        if (selectedOption) {
          if (selectedOption.correcta === "1") {
            correctAnswers++;
          }
        } else {
          return correctAnswers--
        }
      }
    });

    console.log(`Total preguntas: ${questions.length}, Respuestas correctas: ${correctAnswers}`);

    const percentage = (correctAnswers / questions.length) * 100;
    return Math.round(percentage); 
  };

  const handleFinish = () => {
    const now = new Date();

    if (blockUntil && now < blockUntil) {
      console.log(`Bloqueado hasta: ${blockUntil}`);
      return;
    }

    const score = calculateScore();
    setScore(score);
    if (score > 80) {
      setShowApprovedModal(true);
    } else {
      setShowModal(true);
    }
    console.log(`Puntuación final: ${score}%.`);

    if (score < 80) {
      setRemainingAttempts((prevAttempts) => {
        const newAttempts = prevAttempts - 1;
        if (newAttempts <= 0) {
          const blockUntilDate = new Date();
          blockUntilDate.setHours(blockUntilDate.getHours() + 1); // Bloquear por 1 hora
          setBlockUntil(blockUntilDate);
        } else {
          const blockUntilDate = new Date();
          blockUntilDate.setMinutes(blockUntilDate.getMinutes() + 10); // Bloquear por 10 minutos
          setBlockUntil(blockUntilDate);
        }
        return newAttempts;
      });
    }
  };

  const showPrevButton = currentPage > 0;
  const showNextButton = currentPage < questions.length / questionsPerPage - 1;
  const showFinishButton = currentPage === questions.length / questionsPerPage - 1;

  const now = new Date();
  const isBlocked = blockUntil && now < blockUntil;

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 max-w-screen-2xl mm items-center p-6">
        <h1 className="mt-4 text-3xl sm:text-5xl font-montserrat-bold bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] inline-block text-transparent bg-clip-text">
          Quiz
        </h1>
        <hr className="m-auto bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-[100%] h-[10px] mb-8" />
        <ul>
          {questions
            .slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage)
            .map((question) => (
              <li key={question.id}>
                <h3 className="font-montserrat-light text-xl sm:text-3xl mb-8 w-[75%]">
                  {question.pregunta}
                </h3>
                <ul className="font-montserrat-regular bg-gradient-to-r from-[#BFD630] to-[#4EC3E0] w-[95%] py-16 px-5 rounded-3xl leading-9">
                  {question.opciones_pregunta.map((option) => (
                    <li key={option.id} className="mb-3">
                      <input
                        type="radio"
                        id={option.id}
                        name={`question_${question.id}`}
                        className="hidden"
                        onChange={() => handleResponseChange(question.id, option.id)}
                        checked={userResponses[question.id] === option.id}
                      />
                      <label htmlFor={option.id} className="bg-white messageText cursor-pointer hover:bg-red-300">
                        <span className="px-2">{option.indice_opcion_pregunta} |</span>
                        <span>{option.texto_opcion_pregunta}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>

        <div className="flex justify-between md:justify-start md:gap-5 mt-4">
          {showPrevButton && (
            <button
              onClick={goToPrevPage}
              className="border border-[#003D78] bg-white rounded-full py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold hover:bg-[#003D78] hover:text-white"
            >
              Anterior
            </button>
          )}
          {showNextButton && (
            <button
              onClick={goToNextPage}
              className="border border-[#003D78] bg-white rounded-full py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold hover:bg-[#003D78] hover:text-white"
            >
              Siguiente
            </button>
          )}
          {showFinishButton && (
            <button
              onClick={handleFinish}
              disabled={remainingAttempts <= 0}
              className={`border border-[#BFD630] bg-white rounded-full py-1.5 px-3 md:py-4 md:px-7 font-montserrat-bold ${
                remainingAttempts <= 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#BFD630] hover:text-[#003D78]"
              }`}
            >
              {isBlocked ? `Bloqueado hasta ${blockUntil.toLocaleTimeString()}` : "Enviar respuestas"}
            </button>
          )}
        </div>

        {showApprovedModal && <ApprovedModal onClose={() => setShowApprovedModal(false)} score={score} />}
        {showModal && <Modal onClose={() => setShowModal(false)} score={score} />}
      </div>
    </>
  );
}

export default Questions;
