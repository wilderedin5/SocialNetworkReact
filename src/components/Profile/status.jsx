import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(45, 80, 165);
  padding: 5px 10px;
  margin-bottom: 5px;
`;

export const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.editStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return editMode ? (
    <Input
      autoFocus={true}
      onChange={onChangeStatus}
      onBlur={deactivateEditMode}
      value={status}
    />
  ) : (
    <div onClick={activateEditMode}>{status || "----"}</div>
  );
};
