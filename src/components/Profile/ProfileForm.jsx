import React from "react";
import { reduxForm } from "redux-form";
import styled from "@emotion/styled";
import { Button } from "../common/type";
import { Field } from "../../hoc/form-elements";

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const ContactList = styled.ul`
  list-style: none;
  font-size: 24px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 0;
`;

const ProfileForm = ({ handleSubmit, profile }) => (
  <form onSubmit={handleSubmit}>
    <ProfileInfo>
      <label>
        Looking for a job:
        <Field
          name="lookingForAJob"
          placeholder="Looking for a job:"
          type="checkbox"
        />
      </label>

      <Field name="fullName" placeholder="Name" />
      <Field name="aboutMe" placeholder="About me" maxLength="250" />
      <Field name="lookingForAJobDescription" placeholder="My skills" />
      <ContactList>
        {Object.keys(profile.contacts).map((key) => (
          <Field
            key={key}
            name={"contacts." + key}
            placeholder={key}
            maxLength="250"
          />
        ))}
      </ContactList>
    </ProfileInfo>
    <StyledButton>Save page</StyledButton>
  </form>
);

export default reduxForm({
  form: "profileInfoForm",
})(ProfileForm);
