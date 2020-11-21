import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="text"
      placeholder="Type your text"
      maxLength="1000"
    />
    <Field name="author" placeholder="Author" />
    <Field name="theme" placeholder="Theme" />
    <Field name="category" placeholder="Category" />
    <Button>Add news</Button>
    <div>{error}</div>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(Form);
