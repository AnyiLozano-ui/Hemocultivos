import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  RESET_SUCCESS,
  LOGOUT,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  questions: [],
  user: null,
  error: null,
  success: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        success: false,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        error: null,
      };
    case QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


