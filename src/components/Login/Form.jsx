import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Field as BaseField } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Container = styled.form`
  text-align: center;
  margin-bottom: 40px;
  input[type="checkbox"] {
    width: 15px;
    margin-right: 5px;
  }
`;

const Field = styled(BaseField)`
  width: 200px;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
`;

const Form = ({ handleSubmit, captchaUrl, error }) => (
  <Container onSubmit={handleSubmit}>
    <Field name="email" placeholder="Login" />
    <Field name="password" placeholder="Password" type="password" />
    <Label>
      <Field type="checkbox" name="rememberMe" />
      Remember me
    </Label>
    <Button>Login</Button>
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
