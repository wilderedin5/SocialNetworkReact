import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  selectUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsFollowingProgress,
} from "../../redux/Selectors/users-selectors";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  setFetching,
  getUsers,
} from "../../redux/users-reducer";
import { Preloader } from "../common/Preloader/Preloader";
import { Users } from "./Users";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.getUsers(pageNumber, props.pageSize);
  };

  return (
    props.isFetching ? <Preloader /> : <Users onPageChanged={onPageChanged} {...props} />
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  isFollowingProgress: getIsFollowingProgress(state),
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setFetching,
    getUsers,
  })
)(UsersContainer);
