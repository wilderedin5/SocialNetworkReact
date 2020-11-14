import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import { Field } from "../../hoc/form-elements";

const Button = styled(BaseButton)`
  & + & {
    margin-left: 10px;
  }
`;

const Form = ({ handleSubmit, eraseDialog }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="dialogsMessageText"
      placeholder="Yo, on the other side of the monitor they are tired of waiting for your message !!!"
      maxLength="250"
    />
    <Button htmlType="submit" type="primary">
      Send
    </Button>
    <Button onClick={eraseDialog} type="primary">
      Clear chat
    </Button>
  </form>
);

export default reduxForm({
  form: "DialogsForm",
})(Form);
