/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const performLogin = () => {
    setIsLoggedIn(true);
  };

  const performLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, performLogin, performLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
