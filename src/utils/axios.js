import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE,
  PASSWORD_RECOVERY,
  PASSWORD_FAILED,
} from "../actions/actionTypes";

export const loginUser = (loginData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://testapi.elearningclinicalbmxsystems.com/api/auth/login`,
      loginData
    );
    const { ok, data } = response.data;
    if (ok) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      sessionStorage.setItem("token", data.token);
      navigate("/cursos-teoricos");
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: data.error });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: "Error al iniciar sesión. Por favor, inténtalo de nuevo.",
    });
  }
};

export const logoutUser = () => (dispatch) => {
  sessionStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  window.location.href = "/login";
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://testapi.elearningclinicalbmxsystems.com/api/auth/register`,
      {...registerData,confirm_password:undefined}
    );
    const { ok, data } = response.data;
    if (ok) {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE });
  }
};

export const passwordRecov = (passwordRecover) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://testapi.elearningclinicalbmxsystems.com/api/auth/password-recovery`,
      passwordRecover
    );
    const { ok, data } = response.data;
    if (ok) {
      dispatch({ type: PASSWORD_RECOVERY, payload: data });
    }
  } catch (error) {
    dispatch({ type: PASSWORD_FAILED });
  }
};

export const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://testapi.elearningclinicalbmxsystems.com/api/questions`
    );

    const { status, data } = response;
    if (status === 200) {
      dispatch({ type: QUESTIONS_SUCCESS, payload: data.preguntas });
    } else {
      dispatch({
        type: QUESTIONS_FAILURE,
        payload: "Error al obtener las preguntas",
      });
    }
  } catch (error) {
    dispatch({
      type: QUESTIONS_FAILURE,
      payload: "Error al obtener las preguntas",
    });
  }
};
