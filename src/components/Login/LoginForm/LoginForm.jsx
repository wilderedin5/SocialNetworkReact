import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "antd";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";
import createFormElement from "../../../hoc/createFormElement/createFormElement";

const maxLength100 = maxLength(100);

const BaseInput = styled.input`
  width: 250px;
  padding: 5px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid rgb(45, 80, 165);
  outline: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  & input[type="checkbox"] {
    margin-bottom: 15px;
    margin-right: 5px;
  }
`;

const LoginForm = ({ handleSubmit, captchaUrl, error }) => {
  const Input = createFormElement(BaseInput);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Login"
          name="email"
          component={Input}
          type="text"
          validate={[maxLength100, requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component={Input}
          type="password"
          validate={[maxLength100, requiredField]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Remember me
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </div>
      <div>
        {captchaUrl && <img src={captchaUrl} alt="" />}
        {captchaUrl && (
          <Field
            type="text"
            name="captcha"
            component={Input}
            validate={[requiredField]}
          />
        )}
      </div>
      <div>{error ? error : null}</div>
    </Form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
