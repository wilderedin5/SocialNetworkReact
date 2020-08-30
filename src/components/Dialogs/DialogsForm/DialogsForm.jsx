import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "antd";
import { Textarea as BaseTextarea } from "../../common/shared/type";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";
import createFormElement from "../../../hoc/createFormElement/createFormElement";

const maxLength250 = maxLength(250);

const Form = styled.form``;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DialogsForm = ({ handleSubmit, deleteAllMessages, id }) => {
  const Textarea = createFormElement(BaseTextarea);
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name={"dialogsMessageText"}
        placeholder="Yo, on the other side of the monitor they are tired of waiting for your message !!!"
        type="text"
        validate={[maxLength250, requiredField]}
      />
      <Flex>
        <Button htmlType="submit" type="primary">
          Send
        </Button>
        <Button onClick={() => deleteAllMessages(id)} type="primary">
          Clear chat
        </Button>
      </Flex>
    </Form>
  );
};

export default reduxForm({
  form: "DialogsForm",
})(DialogsForm);
