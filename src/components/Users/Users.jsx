import React from "react";
import styled from "@emotion/styled";
import { Pagination as BasePagination } from "antd";
import { User } from "./User";

const Pagination = styled(BasePagination)`
  margin-bottom: 20px;
`;

export const Users = ({
  users,
  currentPage,
  totalUsersCount,
  onPageChanged,
  isFollowingProgress,
  unfollow,
  follow,
}) => (
    <div>
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