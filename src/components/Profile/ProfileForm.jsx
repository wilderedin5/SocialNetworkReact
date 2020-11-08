import React from "react";
import { reduxForm, Field } from "redux-form";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import { maxLength250, Input } from "../../hoc/createFormElement/createFormElement";

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const ContactList = styled.ul`
  list-style: none;
  font-size: 24px;
`

const Name = styled.div`
  font-size: 28px;
  line-height: 1;
`;

const Button = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 0;
`;

const ProfileForm = ({ handleSubmit, profile, error }) => (
  <form onSubmit={handleSubmit}>
    <ProfileInfo>
      <Name>
        Name:
          <Field
          name="fullName"
          placeholder="Name"
          type="text"
          component={Input}
          validate={[maxLength250]}
        />
      </Name>
      <div>
        Looking for a job:
          <Field
          name="lookingForAJob"
          type="checkbox"
          component={Input}
          validate={[maxLength250]}
        />
      </div>
      <div>
        My skills:
          <Field
          name="lookingForAJobDescription"
          placeholder="My skills"
          type="text"
          component={Input}
          validate={[maxLength250]}
        />
      </div>
      <div>
        About me:
          <Field
          name="aboutMe"
          placeholder="About me"
          type="text"
          component={Input}
          validate={[maxLength250]}
        />
      </div>
      <ContactList>
        {Object.keys(profile.contacts).map((key) => (
          <Field
            name={"contacts." + key}
            key={key}
            placeholder={key}
            type="text"
            component={Input}
            validate={[maxLength250]}
          />
        )
        )}
      </ContactList>
    </ProfileInfo>
    <Button htmlType="submit">Save page</Button>
    <div>{error}</div>
  </form>
);


export default reduxForm({
  form: "profileInfoForm",
})(ProfileForm);
