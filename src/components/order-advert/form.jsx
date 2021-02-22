import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" placeholder="Title your advert" />
    <Field name="img" placeholder="Link on img" maxLength="1000" />
    <Field
      component="textarea"
      name="text"
      placeholder="Type your text"
      maxLength="1000"
    />
    <Button>Add news</Button>
    <div>{error}</div>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
