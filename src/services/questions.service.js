import { useSelector } from "react-redux";

const useAuthQuestions = () => {
  const questions = useSelector((state) => state.questions);
  return {
    questions,
  };
};

export default useAuthQuestions;
