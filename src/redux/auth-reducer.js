import { authAPI } from '../api/api';
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
                    ...action.userData,
                    isAuth: true
                }
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return ({
        type: SET_AUTH_USER_DATA,
        userData: { userId, email, login }
    });
};

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;