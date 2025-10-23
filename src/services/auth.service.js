import { useSelector } from "react-redux";

const useAuthService = () => {
  const user = useSelector((state) => state.user);
  return {
    user,
  };
};

export default useAuthService;
