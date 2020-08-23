import React from "react";
import styled from "@emotion/styled";
import { Divider as BaseDivider } from "antd";
import Friend from "./Friend/Friend";

const Container = styled.div`
  padding: 0 20px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Panel = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

const Divider = styled(BaseDivider)`
  font-size: 18px;
`;

const Friends = ({ friends }) => (
  <Container>
    <Divider style={{ color: "#fff" }} orientation="center">
      Friends
    </Divider>
    <Panel>
      {friends.map((friend) => (
        <Friend id={friend.id} key={friend.id} name={friend.name} />
      ))}
    </Panel>
  </Container>
);

export default Friends;
