import { usersAPI } from "../api/api";
const SET_LAST_FRIEND = "sidebar-reducer/SET_LAST_FRIEND";

let initialState = {
  friends: [],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_FRIEND:
      return {
        ...state,
        friends: [...action.friends],
      };
    default:
      return state;
  }
};

export const setLastFriend = (friends) => ({
  type: SET_LAST_FRIEND,
  friends,
});

export const getLastFriends = (currentPage, pageSize) => async (dispatch) => {
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setLastFriend(data.items));
};

export default sidebarReducer;
