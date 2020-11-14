import React from "react";
import { reduxForm, Field } from "redux-form";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import { maxLength250, Input } from "../../hoc/createFormElement";

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const ContactList = styled.ul`
  list-style: none;
  font-size: 24px;
`

const FieldContainer = styled.div`
  font-size: ${p => p.isName ? '28px' : null};
  line-height: 1;
`;

const Button = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 0;
`;

const profileFormData = [
  {
    value: "Looking for a job:",
    name: "lookingForAJob",
    placeholder: "",
    type: "checkbox",
    component: Input,
    validate: [maxLength250]
  },
  {
    value: "My skills:",
    name: "lookingForAJobDescription",
    placeholder: "My skills",
    type: "text",
    component: Input,
    validate: [maxLength250]
  },
  {
    value: "About me:",
    name: "aboutMe",
    placeholder: "About me",
    type: "text",
    component: Input,
    validate: [maxLength250]
  },
  {
    value: "Name:",
    name: "fullName",
    placeholder: "Name",
    type: "text",
    component: Input,
    validate: [maxLength250]
  }
]

const ProfileForm = ({ handleSubmit, profile, error }) => (
  <form onSubmit={handleSubmit}>
    <ProfileInfo>
      {profileFormData.map(field => <FieldContainer key={field.name} isName={field.name === 'fullName'} >
        {field.value}:
          <Field {...field} />
      </FieldContainer>)}

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
