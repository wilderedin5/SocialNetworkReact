import React from "react";
import styled from "@emotion/styled";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import {
  Textarea as BaseTextarea,
  Input as BaseInput,
} from "../../common/shared/type";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";
import createFormElement from "../../../hoc/createFormElement/createFormElement";

const maxLength1000 = maxLength(1000);
const maxLength100 = maxLength(100);

const Form = styled.form``;

const NewsForm = ({ handleSubmit, error }) => {
  const Textarea = createFormElement(BaseTextarea);
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
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
      <div>{error ? error : null}</div>
    </Form>
  );
};

export default reduxForm({
  form: "NewsForm",
})(NewsForm);
