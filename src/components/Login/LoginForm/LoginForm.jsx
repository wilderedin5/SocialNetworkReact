import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "antd";
import { Input as BaseInput } from "../../common/shared/type";
import { maxLength, requiredField } from "../../../utils/validate/validateForm";
import createFormElement from "../../../hoc/createFormElement/createFormElement";

const maxLength100 = maxLength(100);

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
      <Field
        placeholder="Login"
        name="email"
        component={Input}
        type="text"
        validate={[maxLength100, requiredField]}
      />
      <Field
        placeholder="Password"
        name="password"
        component={Input}
        type="password"
        validate={[maxLength100, requiredField]}
      />
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Remember me
      </div>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
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
