import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import { requiredField } from "../../utils/validate/validateForm";
import {
  maxLength250,
  maxLength60,
  Textarea,
  Input,
} from "../../hoc/createFormElement";

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Textarea}
      name={"postText"}
      placeholder="This wall is waiting for your post!"
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
  form: "MyPosts",
})(Form);
