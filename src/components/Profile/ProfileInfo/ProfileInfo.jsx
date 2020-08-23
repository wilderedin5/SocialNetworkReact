import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Button as BaseButton, Divider } from "antd";
import noAvatar from "../../../assets/image/noAvatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import Contact from "./Contact/Contact";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px dashed #fff;
  color: #000;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    width: 224px;
    height: 224px;
    margin-bottom: 10px;
  }
`;

const AvatarImage = styled.img`
  border: 1px solid rgb(45, 80, 165);
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  position: absolute;
  z-index: -2;
`;

const Label = styled.label`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;
  &::after {
    content: "";
    background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/OOjs_UI_icon_upload.svg/1200px-OOjs_UI_icon_upload.svg.png")
      center center/cover;
    width: 32px;
    height: 32px;
    margin-left: 10px;
  }
  &:hover {
    border: 1px solid rgb(45, 80, 165);
    color: #fff;
    background: rgb(45, 80, 165);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  & ul {
    list-style-type: none;
    font-size: 24px;
  }
  & input {
    border-radius: 5px;
    border: 1px solid rgb(45, 80, 165);
    padding: 5px 10px;
    margin-bottom: 5px;
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

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  const onSubmit = (formData) => {
    props.updateProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  const onChangePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage
          src={
            props.profile.photos.large ? props.profile.photos.large : noAvatar
          }
        />
        {props.isOwner ? (
          <div>
            <Input type="file" id="photoFile" onChange={onChangePhoto} />
            <Label for="photoFile">Изменить аватарку</Label>
          </div>
        ) : (
          ""
        )}
      </AvatarContainer>
      {editMode ? (
        <ProfileInfoForm
          initialValues={props.profile}
          onSubmit={onSubmit}
          profile={props.profile}
        />
      ) : (
        <Info>
          <Name>{props.profile.fullName}</Name>
          <div>
            <ProfileStatusWithHook
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <Divider orientation="left">Основная информация:</Divider>
          <div>Ищу работу: {props.profile.lookingForAJob ? "Да" : "Нет"} </div>
          <div>Мои навыки: {props.profile.lookingForAJobDescription} </div>
          <div>Обо мне: {props.profile.aboutMe}</div>
          <Divider orientation="left">Контакты:</Divider>
          <ul>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <Contact
                  key={key}
                  contactName={key}
                  contactValue={props.profile.contacts[key]}
                />
              );
            })}
          </ul>
        </Info>
      )}
      {props.isOwner && !editMode && (
        <Button onClick={() => setEditMode(true)}>
          Редактировать страницу
        </Button>
      )}
    </Container>
  );
};

export default ProfileInfo;
