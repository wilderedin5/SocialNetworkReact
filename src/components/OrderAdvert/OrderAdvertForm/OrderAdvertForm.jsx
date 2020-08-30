import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { reduxForm, Field } from "redux-form";
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

const BaseTextarea = styled.textarea`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid rgb(45, 80, 165);
  padding: 10px;
  outline: none;
  resize: none;
`;

const BaseInput = styled.input`
  width: 400px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgb(45, 80, 165);
  margin-bottom: 5px;
  outline: none;
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
