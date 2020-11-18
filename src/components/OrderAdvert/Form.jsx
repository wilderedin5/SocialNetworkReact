import React from "react";
import { Button } from "antd";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/form-elements";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" placeholder="Title your advert" />
    <Field name="image" placeholder="Link on image" maxLength="1000" />
    <Field
      component="textarea"
      name="text"
      placeholder="Type your text"
      maxLength="1000"
    />
    <Button type="primary" htmlType="submit">
      Add news
    </Button>
    <div>{error}</div>
  </form>
);

export default reduxForm({
  form: "AdvertForm",
})(Form);
