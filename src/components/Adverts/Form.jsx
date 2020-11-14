import React from "react";
import { reduxForm } from "redux-form";
import { Button as BaseButton } from "antd";
import styled from "@emotion/styled";
import { Field } from "../../hoc/form-elements";

const Button = styled(BaseButton)`
  margin-top: 10px;
`;

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="commentText"
      placeholder="Message"
      maxLength="250"
    />
    <Field name="name" placeholder="Name" maxLength="60" />
    <Button type="primary" htmlType="submit">
      Send
    </Button>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
