import React from "react";
import styled from "@emotion/styled";
import { Divider } from "antd";
import { Friend } from "./Friend";

const Container = styled.div`
  padding: 0 20px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Friends = ({ friends }) => (
  <Container>
    <Divider style={{ color: "#fff" }} orientation="center">
      Friends
    </Divider>
    <Panel>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </Panel>
  </Container>
);