import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { Pagination as BasePagination } from "antd";
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
import { User } from "./User";

const Pagination = styled(BasePagination)`
  margin-bottom: 20px;
`;

const Users = ({ getUsers, currentPage, pageSize, setCurrentPage, totalUsersCount, isFollowingProgress, unfollow, follow, isFetching, users }) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize);
  };

  return (
    isFetching ? <Preloader /> : <div>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalUsersCount}
        onChange={onPageChanged}
        showSizeChanger={false}
      />
      {users.map((user) => (
        <User
          key={user.id}
          isFollowingProgress={isFollowingProgress}
          unfollow={unfollow}
          follow={follow}
          user={user}
        />
      ))}
    </div>
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
)(Users);
