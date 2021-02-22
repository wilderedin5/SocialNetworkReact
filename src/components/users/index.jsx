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
} from "../../redux/selectors/users-selectors";
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
import { Loader } from "../common/type";
import { User } from "./user";

const Pagination = styled(BasePagination)`
  margin-bottom: 20px;
`;

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Users = ({
  getUsers,
  currentPage,
  pageSize,
  setCurrentPage,
  totalUsersCount,
  isFollowing,
  unfollow,
  follow,
  isFetching,
  users,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize);
  };

  return isFetching ? (
    <Loader />
  ) : (
    <div>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalUsersCount}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
      <UserList>
        {users.map((user) => (
          <User
            key={user.id}
            isFollowing={isFollowing}
            unfollow={unfollow}
            follow={follow}
            user={user}
          />
        ))}
      </UserList>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  isFollowing: getIsFollowingProgress(state),
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
