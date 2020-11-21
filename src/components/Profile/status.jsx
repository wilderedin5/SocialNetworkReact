import React, { useState, useEffect } from "react";
import { Input } from "../common/type";

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
    props.setStatus(status);
  };

  const handleStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return editMode ? (
    <Input
      autoFocus={true}
      onChange={handleStatusChange}
      onBlur={deactivateEditMode}
      value={status}
    />
  ) : (
    <div onClick={activateEditMode}>{status || "----"}</div>
  );
};
