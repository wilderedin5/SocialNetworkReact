import React from "react";
import { reduxForm } from "redux-form";
import { Button } from "antd";
import { Field } from "../../hoc/form-elements";

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="postText"
      placeholder="This wall is waiting for your post!"
      maxLength="250"
    />
    <Field name="name" placeholder="Name" maxLength="60" />
    <Button type="primary" htmlType="submit">
      Send
    </Button>
  </form>
);

export default reduxForm({
  form: "MyPosts",
})(Form);
