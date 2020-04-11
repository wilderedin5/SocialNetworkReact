import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            {
                return {
                    ...state,
                    ...action.userData
                }
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return ({
        type: SET_AUTH_USER_DATA,
        userData: { userId, email, login, isAuth }
    });
};


export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const loginIntoSocialNetwork = (email,password,rememberMe) => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages[0].length > 0 ? response.data.messages[0] : "Error !!!";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const logoutFromSocialNetwork = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;