import { usersAPI } from "../api/api";
const FOLLOW = "users-reducer/FOLLOW";
const UNFOLLOW = "users-reducer/UNFOLLOW";
const SET_USERS = "users-reducer/SET_USERS";
const SET_CURRENT_PAGE = "users-reducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users-reducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users-reducer/TOGGLE_IS_FETCHING";
const FOLLOWING_IS_PROGRESS = "users-reducer/FOLLOWING_IS_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userId ? { ...user, followed: true } : user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userId
            ? { ...user, followed: false }
            : user;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case FOLLOWING_IS_PROGRESS: {
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const setFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setFollowingProgress = (isFetching, userId) => ({
  type: FOLLOWING_IS_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersCount(data.totalCount));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(setFollowingProgress(true, userId));
  let response = await usersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(setFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  dispatch(setFollowingProgress(true, userId));
  let response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(setFollowingProgress(false, userId));
};
