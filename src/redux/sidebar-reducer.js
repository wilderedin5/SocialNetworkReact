import { usersAPI } from "../api/api";
const SET_FRIENDS = "sidebar-reducer/SET_FRIENDS";

let initialState = {
  friends: [],
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };
    default:
      return state;
  }
};

export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends,
});

export const getFriends = (currentPage, pageSize) => async (dispatch) => {
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setFriends(data.items));
};

export default sidebarReducer;
