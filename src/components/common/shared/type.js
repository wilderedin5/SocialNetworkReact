import React from "react";
import styled from "@emotion/styled";
import { Divider as BaseDivider } from "antd";

export const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgb(45, 80, 165);
  padding: 10px;
  outline: none;
  resize: none;
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid rgb(45, 80, 165);
  outline: none;
`;

export const Note = ({ label, value }) => (
  <div>
    <b>{label}</b>: {value}
  </div>
);

export const Divider = ({ title, orientation }) => (
  <BaseDivider style={{ color: "#fff" }} orientation={orientation || "center"}>
    {title}
  </BaseDivider>
);
