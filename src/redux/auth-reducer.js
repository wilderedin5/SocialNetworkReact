import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_AUTH_USER_DATA = "auth-reducer/SET_AUTH_USER_DATA";
const GET_CAPTCHA_SUCCESS = "auth-reducer/GET_CAPTCHA_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_SUCCESS:
      return {
        ...state,
        ...action.userData,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({
  type: SET_AUTH_USER_DATA,
  userData: { userId, email, login, isAuth, captcha },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_SUCCESS,
  userData: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages[0].length > 0
        ? response.data.messages[0]
        : "Error !!!";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
