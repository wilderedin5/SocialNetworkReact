import { usersAPI } from '../api/api';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS';


let initialState = {
    users: [

    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true }
                        }
                        return u;
                    })
                }
            }
        case UNFOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u;
                    })
                }
            }
        case SET_USERS:
            {
                return {
                    ...state,
                    users: [...action.users]
                }
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        case SET_TOTAL_USERS_COUNT:
            {
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }
            }
        case TOGGLE_IS_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
        case FOLLOWING_IS_PROGRESS:
            {
                return {
                    ...state,
                    isFollowingProgress: action.isFetching
                        ? [...state.isFollowingProgress, action.userId]
                        : state.isFollowingProgress.filter(id => id != action.userId)
                }
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return ({
        type: FOLLOW, userId
    });
};

export const unfollowSuccess = (userId) => {
    return ({
        type: UNFOLLOW, userId
    });
};

export const setUsers = (users) => {
    return ({
        type: SET_USERS, users
    });
};

export const setCurrentPage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    });
};

export const setTotalUsersCount = (totalUsersCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    });
};

export const toggleIsFetching = (isFetching) => {
    return ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    });
};

export const setFollowingProgress = (isFetching, userId) => {
    return ({
        type: FOLLOWING_IS_PROGRESS,
        isFetching,
        userId
    });
};

export const requestForUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(setFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(setFollowingProgress(false, userId));
};

export default usersReducer;