import React from "react";
import { reduxForm } from "redux-form";
import { Button } from "../common/type";
import { Field } from "../../hoc/form-elements";

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="postText"
      placeholder="Type your text"
      maxLength="250"
    />
    <Field name="author" placeholder="Author" maxLength="60" />
    <Button>Send</Button>
  </form>
);

export default reduxForm({
  form: "MyPosts",
})(Form);
