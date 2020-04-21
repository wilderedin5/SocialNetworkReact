import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_COMPLETE = 'app-reducer/INITIALIZED_COMPLETE';
const CHANGE_THEME = 'app-reducer/CHANGE_THEME';

let initialState = {
    initiliazed: false,
    darkTheme: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_COMPLETE:
            return {
                ...state,
                initiliazed: true
            }
        case CHANGE_THEME:
            return {
                ...state,
                darkTheme: action.changeTheme
            }
        default:
            return state;
    }
}

export const setInitializeApp = () => {
    return ({
        type: INITIALIZED_COMPLETE
    });
}

export const setChangeTheme = (changeTheme) => {
    return ({
        type: CHANGE_THEME,
        changeTheme
    });
}

export const initiliazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitializeApp());
    });
}

export default appReducer;