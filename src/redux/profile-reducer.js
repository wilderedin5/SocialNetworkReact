import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: "Привет, как дела?", likeCount: 144 },
        { id: 2, message: "Привет, сейчас на паре.", likeCount: 24 },
        { id: 3, message: "Автобус в 8-15", likeCount: 31 },
        { id: 4, message: "Обратно хз когда", likeCount: 2 },
        { id: 5, message: "GHost division", likeCount: 7 },
        { id: 6, message: "Below", likeCount: 17 },
        { id: 7, message: "Above", likeCount: 31 },
        { id: 8, message: "Below", likeCount: 19 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USERS_PROFILE:
            {
                return {
                    ...state,
                    profile: action.profile
                }
            }
        case SET_STATUS:
            {
                return {
                    ...state,
                    status: action.status
                }
            }
        case UPDATE_PHOTO:
            {
                return {
                    ...state, profile: {...state.profile, photos: action.photo}
                }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return ({
        type: ADD_POST,
        newPostText
    });
};

export const setUsersProfile = (profile) => {
    return ({
        type: SET_USERS_PROFILE,
        profile
    });
};

export const setStatus = (status) => {
    return ({
        type: SET_STATUS,
        status: status
    });
}

export const updatePhotoSuccess = (photo) => {
    return ({
        type: UPDATE_PHOTO,
        photo
    });
}

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const updatePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(updatePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;