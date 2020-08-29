import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Name = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active,
  &:hover {
    color: rgb(45, 80, 165);
    margin-bottom: -1px;
    border-bottom: 1px solid rgb(45, 80, 165);
  }
`;

const Dialog = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 2px 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border: 1px solid rgb(45, 80, 165);
`;

const DialogItem = ({ id, photoUrl, name }) => (
  <Name to={`/dialogs/${id}`} activeClassName="active">
    <Dialog>
      <Avatar src={photoUrl} alt="" />
      {name}
    </Dialog>
  </Name>
);

export default DialogItem;
