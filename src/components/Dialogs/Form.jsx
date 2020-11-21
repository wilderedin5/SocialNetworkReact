import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const StyledButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

const Form = ({ handleSubmit, eraseDialog }) => (
  <form onSubmit={handleSubmit}>
    <Field component="textarea" name="message" placeholder="Message" />
    <StyledButton>Send</StyledButton>
    <StyledButton onClick={eraseDialog}>Clear chat</StyledButton>
  </form>
);

export default reduxForm({
  form: "DialogsForm",
})(Form);
