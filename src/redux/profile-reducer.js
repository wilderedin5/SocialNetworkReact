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
      text: "Hi, how are you?",
      likeCount: 144,
      hasLike: null,
      author: "Han",
      avatar:
        "https://tengrinews.kz/userdata/news/2019/news_384523/thumb_m/photo_302091.png",
    },
    {
      id: 2,
      text: "Second comments",
      likeCount: 24,
      hasLike: null,
      author: "Cheburek",
      avatar:
        "https://sovkusom.ru/wp-content/uploads/recepty/h/hrustyashchie-chebureki/thumb1-840x440.jpg",
    },
    {
      id: 3,
      text: "I'm waiting for the bus, it will arrive at 8-15",
      likeCount: 31,
      hasLike: null,
      author: "Xzibit",
      avatar: "https://riamo.ru/files/image/14/01/77/-gallery!6sr.jpg",
    },
    {
      id: 4,
      text: "Social network",
      likeCount: 2,
      hasLike: null,
      author: "Splinter",
      avatar:
        "https://otvet.imgsmail.ru/download/u_83d34359929bef51c974dad2a2104c2d_800.jpg",
    },
    {
      id: 5,
      text: "Yo, this is the 5th comment",
      likeCount: 7,
      hasLike: null,
      author: "Mike",
      avatar:
        "https://cdn.igromania.ru/mnt/articles/6/e/e/6/8/4/25282/html/img/f001fd5b52963a4d.jpg",
    },
    {
      id: 6,
      text: "Below",
      likeCount: 17,
      hasLike: null,
      author: "Donatello",
      avatar:
        "https://dic.academic.ru/pictures/wiki/files/50/230px-Red_Donatello.jpg",
    },
    {
      id: 7,
      text: "Above",
      likeCount: 31,
      hasLike: null,
      author: "Leonardo",
      avatar:
        "https://www.ninjaturtles.ru/wp-content/uploads/2012/05/%D0%9B%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE-2008-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%82.jpg",
    },
    {
      id: 8,
      text: "Below",
      likeCount: 19,
      hasLike: null,
      author: "Rafael",
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
            if (post.hasLike === true) {
              return { ...post, hasLike: false, likeCount: --post.likeCount };
            } else if (post.hasLike === false || post.hasLike === null) {
              return { ...post, hasLike: true, likeCount: ++post.likeCount };
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export const addPost = (id, text, likeCount, hasLike, author) => ({
  type: ADD_POST,
  newPost: { id, text, likeCount, hasLike, author },
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const setStatusSuccess = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const setPhotoSuccess = (photo) => ({
  type: UPDATE_PHOTO,
  photo,
});

export const setLike = (postId) => ({
  type: TOGGLE_LIKE_POST,
  postId,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatusSuccess(response.data));
};

export const setStatus = (status) => async (dispatch) => {
  let response = await profileAPI.setStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatusSuccess(status));
  }
};

export const setPhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.uploadPhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.data.photos));
  }
};

export const editProfile = (profile) => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let response = await profileAPI.editProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let text =
      response.data.texts[0].length > 0 ? response.data.texts[0] : "Error!";
    dispatch(stopSubmit("profileInfoForm", { _error: text }));
  }
};
