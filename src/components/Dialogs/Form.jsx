import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import { requiredField } from "../../utils/validate/validateForm";
import { maxLength250, Textarea } from "../../hoc/createFormElement";

const Button = styled(BaseButton)`
  & + & {
    margin-left: 10px;
  }
`;

const Form = ({ handleSubmit, deleteAllMessages, id }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Textarea}
      name={"dialogsMessageText"}
      placeholder="Yo, on the other side of the monitor they are tired of waiting for your message !!!"
      type="text"
      validate={[maxLength250, requiredField]}
    />
    <div>
      <Button htmlType="submit" type="primary">
        Send
      </Button>
      <Button onClick={() => deleteAllMessages(id)} type="primary">
        Clear chat
      </Button>
    </div>
  </form>
);

export default reduxForm({
  form: "DialogsForm",
})(Form);
