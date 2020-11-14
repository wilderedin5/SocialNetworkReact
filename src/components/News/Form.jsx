import React from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import { requiredField } from "../../utils/validate/validateForm";
import {
  maxLength1000,
  maxLength100,
  Textarea,
  Input,
} from "../../hoc/createFormElement";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      placeholder="Text news"
      name="newsText"
      component={Textarea}
      type="text"
      validate={[maxLength1000, requiredField]}
    />
    <Field
      placeholder="Author"
      name="author"
      component={Input}
      type="text"
      validate={[maxLength100, requiredField]}
    />
    <Field
      placeholder="Theme"
      name="theme"
      component={Input}
      type="text"
      validate={[maxLength100, requiredField]}
    />
    <Field
      placeholder="Category"
      name="category"
      component={Input}
      type="text"
      validate={[maxLength100, requiredField]}
    />
    <Button type="primary" htmlType="submit">
      Add news
    </Button>
    <div>{error}</div>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(Form);
