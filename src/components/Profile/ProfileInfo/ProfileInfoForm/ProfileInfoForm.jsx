import React from "react";
import { reduxForm, Field } from "redux-form";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import createFormElement from "../../../../hoc/createFormElement/createFormElement";
import { maxLength } from "../../../../utils/validate/validateForm";

const maxLength200 = maxLength(200);

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  & ul {
    list-style-type: none;
    font-size: 24px;
  }
`;

const Name = styled.div`
  font-size: 28px;
  line-height: 1;
`;

const Button = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 0;
`;

const BaseInput = styled.input`
  border-radius: 5px;
  border: 1px solid rgb(45, 80, 165);
  padding: 5px 10px;
  margin-bottom: 5px;
`;

const ProfileInfoForm = (props) => {
  const Input = createFormElement(BaseInput);
  return (
    <form onSubmit={props.handleSubmit}>
      <ProfileInfo>
        <Name>
          Мое имя:{" "}
          <Field
            name="fullName"
            placeholder="Имя"
            type="text"
            component={Input}
            validate={[maxLength200]}
          />
        </Name>
        <div>
          Ищу работу:{" "}
          <Field
            name="lookingForAJob"
            type="checkbox"
            component={Input}
            validate={[maxLength200]}
          />{" "}
        </div>
        <div>
          Мои навыки:{" "}
          <Field
            name="lookingForAJobDescription"
            placeholder="Мои навыки"
            type="text"
            component={Input}
            validate={[maxLength200]}
          />{" "}
        </div>
        <div>
          Обо мне:{" "}
          <Field
            name="aboutMe"
            placeholder="Обо мне"
            type="text"
            component={Input}
            validate={[maxLength200]}
          />
        </div>
        <ul>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Field
                name={"contacts." + key}
                key={key}
                placeholder={key}
                type="text"
                component={Input}
                validate={[maxLength200]}
              />
            );
          })}
        </ul>
      </ProfileInfo>
      <Button htmlType="submit">Сохранить страницу</Button>
      <div>{props.error ? props.error : null}</div>
    </form>
  );
};

export default reduxForm({
  form: "profileInfoForm",
})(ProfileInfoForm);
