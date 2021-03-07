import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field placeholder="Message" name="text" component="textarea" />
    <Field placeholder="Author" name="author" maxLength="60" />
    <Button>Send</Button>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
