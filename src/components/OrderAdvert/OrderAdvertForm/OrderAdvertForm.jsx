import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { reduxForm, Field } from "redux-form";
import {
  Textarea as BaseTextarea,
  Input as BaseInput,
} from "../../common/shared/type";
import createFormElement from "../../../hoc/createFormElement/createFormElement";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";

const maxLength1000 = maxLength(1000);
const maxLength100 = maxLength(100);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
`;

const OrderAdvertForm = ({ handleSubmit, error }) => {
  const Textarea = createFormElement(BaseTextarea);
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
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
      <div>{error ? error : null}</div>
    </Form>
  );
};

export default reduxForm({
  form: "AdvertForm",
})(OrderAdvertForm);
