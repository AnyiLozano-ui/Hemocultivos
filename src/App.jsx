import { Outlet } from "react-router";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Router />
      <Outlet />
    </>
  );
}

export default App;
