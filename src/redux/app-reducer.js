import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_COMPLETE = 'app-reducer/INITIALIZED_COMPLETE';

let initialState = {
    initiliazed: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_COMPLETE:
            return {
                ...state,
                initiliazed: true
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

export const initiliazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitializeApp());
    });
}

export default appReducer;