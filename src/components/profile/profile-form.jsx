import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Field } from "../../hoc/form-elements";
import { Button } from "../common/type";

const Label = styled.label`
  display: flex;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const ProfileForm = ({ handleSubmit, profile }) => (
  <form onSubmit={handleSubmit}>
    <Label>
      Looking for a job:
      <Field name="lookingForAJob" type="checkbox" />
    </Label>

    <Field name="fullName" placeholder="Name" />
    <Field name="aboutMe" placeholder="About me" />
    <Field name="lookingForAJobDescription" placeholder="My skills" />

    {Object.keys(profile.contacts).map((key) => (
      <Field key={key} name={"contacts." + key} placeholder={key} />
    ))}
    <StyledButton>Save page</StyledButton>
  </form>
);

export default reduxForm({
  form: "profileInfoForm",
})(ProfileForm);
