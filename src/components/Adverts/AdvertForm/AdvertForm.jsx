import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button as BaseButton } from "antd";
import styled from "@emotion/styled";
import createFormElement from "../../../hoc/createFormElement/createFormElement";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";

const maxLength250 = maxLength(250);
const maxLength60 = maxLength(60);

const Form = styled.form`
  color: #000;
`;

const BaseTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgb(45, 80, 165);
  outline: none;
  resize: none;
`;

const BaseInput = styled.input``;

const Button = styled(BaseButton)`
  margin-top: 10px;
`;

const AdvertForm = ({ handleSubmit }) => {
  const Textarea = createFormElement(BaseTextarea);
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"commentText"}
          placeholder="Message"
          validate={[requiredField, maxLength250]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"name"}
          placeholder="Name"
          validate={[requiredField, maxLength60]}
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "AdvertForm",
})(AdvertForm);
