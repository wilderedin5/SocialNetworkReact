import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button as BaseButton } from "antd";
import styled from "@emotion/styled";
import { requiredField } from "../../utils/validate/validateForm";
import {
  maxLength60,
  maxLength250,
  Textarea,
  Input,
} from "../../hoc/createFormElement";

const Button = styled(BaseButton)`
  margin-top: 10px;
`;

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Textarea}
      name={"commentText"}
      placeholder="Message"
      validate={[requiredField, maxLength250]}
    />
    <Field
      component={Input}
      name={"name"}
      placeholder="Name"
      validate={[requiredField, maxLength60]}
    />
    <Button type="primary" htmlType="submit">
      Send
    </Button>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
