import React from "react";
import styled from "@emotion/styled";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import {
  Textarea as BaseTextarea,
  Input as BaseInput,
} from "../../../common/shared/type";
import {
  maxLength,
  requiredField,
} from "../../../../utils/validate/validateForm";
import createFormElement from "../../../../hoc/createFormElement/createFormElement";

const maxLength250 = maxLength(250);
const maxLength60 = maxLength(60);

const Form = styled.form``;

const MyPostsForm = ({ handleSubmit }) => {
  const Textarea = createFormElement(BaseTextarea);
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name={"postText"}
        placeholder="This wall is waiting for your post!"
        validate={[requiredField, maxLength250]}
      />
      <Field
        component={Input}
        name={"name"}
        placeholder="Name"
        validate={[requiredField, maxLength60]}
      />
      <Button type="primary" htmlType="submit">
        Send
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: "MyPosts",
})(MyPostsForm);
