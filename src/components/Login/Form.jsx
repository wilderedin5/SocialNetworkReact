import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Field, Checkbox } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Container = styled.form`
  text-align: center;

  input[type="checkbox"] {
    width: 15px;
    margin-right: 5px;
  }
`;

const StyledField = styled(Field)`
  width: 200px;
  border-radius: 4px;
`;

const Form = ({ handleSubmit, captchaUrl, error, className }) => (
  <Container onSubmit={handleSubmit} className={className}>
    <StyledField name="email" placeholder="Login" />
    <StyledField name="password" placeholder="Password" type="password" />
    <Checkbox name="rememberMe">Remember me</Checkbox>
    <Button>Login</Button>
    {captchaUrl && (
      <div>
        <img src={captchaUrl} />
        <StyledField type="text" name="captcha" />
      </div>
    )}
    {error}
  </Container>
);

export default reduxForm({
  form: "login",
})(Form);
