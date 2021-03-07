import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field placeholder="Title your advert" name="title" />
    <Field placeholder="Link on img" name="img" maxLength="1000" />
    <Field placeholder="Type your text" name="text" component="textarea" />
    <Button>Add news</Button>
  </form>
);

export default reduxForm({
  form: "OrderAdvertForm",
})(Form);
