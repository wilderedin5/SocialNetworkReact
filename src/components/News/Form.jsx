import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <Field placeholder="Type your text" name="text" component="textarea" />
    <Field placeholder="Author" name="author" />
    <Field placeholder="Theme" name="theme" />
    <Field placeholder="Category" name="category" />
    <Button>Add news</Button>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(Form);
