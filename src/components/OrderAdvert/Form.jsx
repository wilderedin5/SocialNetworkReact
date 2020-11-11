import React from "react";
import { Button } from "antd";
import { reduxForm, Field } from "redux-form";
import { requiredField } from "../../utils/validate/validateForm";
import { maxLength1000, maxLength100, Input, Textarea } from "../../hoc/createFormElement";

const Form = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      name="title"
      placeholder="Title your advert"
      component={Input}
      validate={[maxLength100, requiredField]}
    />
    <Field
      type="text"
      name="image"
      placeholder="Link on image"
      component={Input}
      validate={[maxLength1000, requiredField]}
    />
    <Field
      type="text"
      component={Textarea}
      name="text"
      placeholder="text your advert"
      validate={[maxLength1000, requiredField]}
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
