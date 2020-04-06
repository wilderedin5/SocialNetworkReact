import { usersAPI } from '../api/api';
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

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
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            {
                return {
                    ...state,
                    profile: action.profile
                }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST
    });
};

export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });
};

export const setUsersProfile = (profile) => {
    return ({
        type: SET_USERS_PROFILE,
        profile
    });
};

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data));
        });
}

export default profileReducer;