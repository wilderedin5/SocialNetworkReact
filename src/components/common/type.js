import React from "react";
import styled from "@emotion/styled";
import { Divider as BaseDivider } from "antd";

export const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #2d50a5;
  padding: 10px;
  outline: none;
  resize: none;
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #2d50a5;
  outline: none;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :after {
    content: "";
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px dotted blue;
    background: transparent;
    animation: Loader 2s linear infinite;
    @keyframes Loader {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Note = ({ label, value }) => (
  <div>
    <b>{label}</b>: {value}
  </div>
);

export const Divider = ({ title, orientation, color }) => (
  <BaseDivider
    style={{ color: color || "#fff" }}
    orientation={orientation || "center"}
  >
    {title}
  </BaseDivider>
);

export const Button = styled.button`
  padding: 5px 16px;
  border: 1px solid gray;
  line-height: 1.5;
  color: #000;
`;
