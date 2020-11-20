import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const ADD_POST = "profile-reducer/ADD-POST";
const DELETE_POST = "profile-reducer/DELETE_POST";
const SET_USERS_PROFILE = "profile-reducer/SET_USERS_PROFILE";
const SET_STATUS = "profile-reducer/SET_STATUS";
const UPDATE_PHOTO = "profile-reducer/UPDATE_PHOTO";
const TOGGLE_LIKE_POST = "profile-reducer/TOGGLE_LIKE_POST";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likeCount: 144,
      liked: null,
      name: "Han",
      avatar:
        "https://tengrinews.kz/userdata/news/2019/news_384523/thumb_m/photo_302091.png",
    },
    {
      id: 2,
      message: "Second comments",
      likeCount: 24,
      liked: null,
      name: "Cheburek",
      avatar:
        "https://sovkusom.ru/wp-content/uploads/recepty/h/hrustyashchie-chebureki/thumb1-840x440.jpg",
    },
    {
      id: 3,
      message: "I'm waiting for the bus, it will arrive at 8-15",
      likeCount: 31,
      liked: null,
      name: "Xzibit",
      avatar: "https://riamo.ru/files/image/14/01/77/-gallery!6sr.jpg",
    },
    {
      id: 4,
      message: "Social network",
      likeCount: 2,
      liked: null,
      name: "Splinter",
      avatar:
        "https://otvet.imgsmail.ru/download/u_83d34359929bef51c974dad2a2104c2d_800.jpg",
    },
    {
      id: 5,
      message: "Yo, this is the 5th comment",
      likeCount: 7,
      liked: null,
      name: "Mike",
      avatar:
        "https://cdn.igromania.ru/mnt/articles/6/e/e/6/8/4/25282/html/img/f001fd5b52963a4d.jpg",
    },
    {
      id: 6,
      message: "Below",
      likeCount: 17,
      liked: null,
      name: "Donatello",
      avatar:
        "https://dic.academic.ru/pictures/wiki/files/50/230px-Red_Donatello.jpg",
    },
    {
      id: 7,
      message: "Above",
      likeCount: 31,
      liked: null,
      name: "Leonardo",
      avatar:
        "https://www.ninjaturtles.ru/wp-content/uploads/2012/05/%D0%9B%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE-2008-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%82.jpg",
    },
    {
      id: 8,
      message: "Below",
      likeCount: 19,
      liked: null,
      name: "Rafael",
      avatar:
        "https://mult-online.ru/posters/260_347_90_1/uploads/posts/2011-05/thumbs/1305106204_rafael.jpg",
    },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.newPost],
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo },
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case TOGGLE_LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            if (post.liked === true) {
              return { ...post, liked: false, likeCount: --post.likeCount };
            } else if (post.liked === false || post.liked === null) {
              return { ...post, liked: true, likeCount: ++post.likeCount };
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export const addPost = (id, message, likeCount, liked, name) => ({
  type: ADD_POST,
  newPost: { id, message, likeCount, liked, name },
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const editPhotoSuccess = (photo) => ({
  type: UPDATE_PHOTO,
  photo,
});

export const toggleLike = (postId) => ({
  type: TOGGLE_LIKE_POST,
  postId,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const editStatus = (status) => async (dispatch) => {
  let response = await profileAPI.editStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const editPhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.uploadPhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(editPhotoSuccess(response.data.data.photos));
  }
};

export const editProfile = (profile) => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let response = await profileAPI.editProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let message =
      response.data.messages[0].length > 0
        ? response.data.messages[0]
        : "Error!";
    dispatch(stopSubmit("profileInfoForm", { _error: message }));
  }
};
