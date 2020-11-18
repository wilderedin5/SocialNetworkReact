import React from "react";
import { reduxForm } from "redux-form";
import { Button } from "antd";
import { Field } from "../../hoc/form-elements";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component="textarea"
      name="newsText"
      placeholder="Text news"
      maxLength="1000"
    />
    <Field name="author" placeholder="Author" />
    <Field name="theme" placeholder="Theme" />
    <Field name="category" placeholder="Category" />
    <Button type="primary" htmlType="submit">
      Add news
    </Button>
    <div>{error}</div>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(Form);
