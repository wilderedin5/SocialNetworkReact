import React from "react";
import styled from "@emotion/styled";
import { ProfileInfo } from "./ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

const Container = styled.div`
  color: #000;
`

export const Profile = ({ owner, ...props }) => (
  <Container>
    <ProfileInfo isOwner={owner} {...props} />
    <MyPostsContainer />
  </Container>
);