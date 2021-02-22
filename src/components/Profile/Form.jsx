import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <Field component="textarea" name="text" placeholder="Type your text" />
    <Field name="author" placeholder="Author" maxLength="60" />
    <Button>Send</Button>
  </form>
);

export default reduxForm({
  form: "MyPosts",
})(Form);
