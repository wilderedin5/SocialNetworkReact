import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field component="textarea" name="text" placeholder="Message" />
    <Field name="author" placeholder="Author" maxLength="60" />
    <StyledButton>Send</StyledButton>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
