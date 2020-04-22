import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import {v4} from 'uuid';
const ADD_POST = "profile-reducer/ADD-POST";
const DELETE_POST = "profile-reducer/DELETE_POST";
const SET_USERS_PROFILE = "profile-reducer/SET_USERS_PROFILE";
const SET_STATUS = 'profile-reducer/SET_STATUS';
const UPDATE_PHOTO = 'profile-reducer/UPDATE_PHOTO';
const TOGGLE_LIKE_POST = 'profile-reducer/TOGGLE_LIKE_POST';

let initialState = {
    posts: [
        { id: 1, message: "Привет, как дела?", likeCount: 144, liked: null },
        { id: 2, message: "Привет, сейчас на паре.", likeCount: 24, liked: null },
        { id: 3, message: "Автобус в 8-15", likeCount: 31, liked: null },
        { id: 4, message: "Обратно хз когда", likeCount: 2, liked: null },
        { id: 5, message: "GHost division", likeCount: 7, liked: null },
        { id: 6, message: "Below", likeCount: 17, liked: null },
        { id: 7, message: "Above", likeCount: 31, liked: null },
        { id: 8, message: "Below", likeCount: 19, liked: null }
    ],
    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v4(),
                message: action.newPostText,
                likeCount: 0,
                liked: null
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PHOTO:
            return {
                ...state, profile: { ...state.profile, photos: action.photo }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case TOGGLE_LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        if(post.liked === true){
                            return { ...post, liked: false, likeCount: --post.likeCount }
                        } else if(post.liked === false || post.liked === null) {
                            return { ...post, liked: true, likeCount: ++post.likeCount }
                        }
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => {
    return ({
        type: ADD_POST,
        newPostText
    });
};

export const deletePost = (postId) => {
    return ({
        type: DELETE_POST,
        postId
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

export const toggleLikePost = (postId) => {
    return ({
        type: TOGGLE_LIKE_POST,
        postId
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

export const updateProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.updateProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    } else {
        let message = response.data.messages[0].length > 0 ? response.data.messages[0] : "Error !!!";
        dispatch(stopSubmit("profileInfoForm", { _error: message }));
    }
}

export default profileReducer;