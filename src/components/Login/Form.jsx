import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "antd";
import { requiredField } from "../../utils/validate/validateForm";
import { maxLength100, Input } from "../../hoc/createFormElement/createFormElement";

const Container = styled.form`
  text-align: center;
  margin-bottom: 40px;
  input[type="checkbox"] {
    margin-bottom: 15px;
    margin-right: 5px;
  }
`;

const Form = ({ handleSubmit, captchaUrl, error }) => (
  <Container onSubmit={handleSubmit}>
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
    {error}
  </Container>
);

export default reduxForm({
  form: "login",
})(Form);
