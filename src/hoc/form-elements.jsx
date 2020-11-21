import React from "react";
import styled from "@emotion/styled";
import { maxLength, requiredField } from "../utils/validate/validateForm";
import {
  Textarea as StyledTextarea,
  Input as StyledInput,
} from "../components/common/type";
import { Field as BaseField } from "redux-form";

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const createFormElement = (Element) => ({ input, meta, ...props }) => (
  <div>
    <Element {...input} {...props} />
    {meta.error && meta.touched && <Error>{meta.error}</Error>}
  </div>
);

const BaseTextarea = createFormElement(StyledTextarea);
const BaseInput = createFormElement(StyledInput);

export const maxLength60 = maxLength(60);
export const maxLength200 = maxLength(200);
export const maxLength1000 = maxLength(1000);

const MAX_LENGTH = {
  "60": maxLength60,
  "200": maxLength200,
  "1000": maxLength1000,
};

const COMPONENT = {
  input: BaseInput,
  textarea: BaseTextarea,
};

export const Field = ({
  name = "",
  placeholder = "",
  type = "text",
  maxLength = "200",
  component = "input",
  ...props
}) => (
  <BaseField
    {...props}
    component={COMPONENT[component]}
    name={name}
    placeholder={placeholder}
    type={type}
    validate={[requiredField, MAX_LENGTH[maxLength]]}
  />
);
