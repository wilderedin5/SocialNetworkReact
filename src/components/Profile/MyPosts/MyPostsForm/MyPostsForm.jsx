import React from "react";
import styled from "@emotion/styled";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import {
  maxLength,
  requiredField,
} from "../../../../utils/validate/validateForm";
import createFormElement from "../../../../hoc/createFormElement/createFormElement";

const maxLength250 = maxLength(250);
const maxLength60 = maxLength(60);

const Form = styled.form``;

const BaseTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgb(45, 80, 165);
  outline: none;
  resize: none;
  color: #000;
`;

const BaseInput = styled.input`
  color: #000;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid rgb(45, 80, 165);
  margin-bottom: 10px;
`;

const MyPostsForm = ({ handleSubmit }) => {
  const Textarea = createFormElement(BaseTextarea);
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"postText"}
          placeholder="This wall is waiting for your post!"
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
  form: "MyPosts",
})(MyPostsForm);
