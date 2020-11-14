import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "antd";
import { requiredField } from "../../utils/validate/validateForm";
import { Field } from "../../hoc/form-elements";

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
      component="textarea"
      name="email"
      placeholder="Login"
      maxLength="100"
    />
    <Field
      name="password"
      placeholder="Password"
      maxLength="100"
      type="password"
    />
    <div>
      <Field type="checkbox" name="rememberMe" />
      Remember me
    </div>
    <Button type="primary" htmlType="submit">
      Login
    </Button>
    {captchaUrl && (
      <div>
        <img src={captchaUrl} alt="" />
        <Field type="text" name="captcha" />
      </div>
    )}
    {error}
  </Container>
);

export default reduxForm({
  form: "login",
})(Form);
