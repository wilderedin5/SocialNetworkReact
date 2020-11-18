import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button as BaseButton } from "antd";
import noAvatar from "../../assets/image/noAvatar.jpg";
import { Loader, Divider } from "../common/type";
import { Status } from "./Status";
import ProfileForm from "./ProfileForm";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px dashed #fff;
`;

const AvatarImage = styled.img`
  border: 1px solid rgb(45, 80, 165);
  width: 224px;
  height: 224px;
  margin-bottom: 10px;
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
  :after {
    content: "";
    background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/OOjs_UI_icon_upload.svg/1200px-OOjs_UI_icon_upload.svg.png")
      center center/cover;
    width: 32px;
    height: 32px;
    margin-left: 10px;
  }
  :hover {
    border: 1px solid rgb(45, 80, 165);
    color: #fff;
    background: rgb(45, 80, 165);
  }
`;

const InfoContainer = styled.div`
  padding-left: 30px;
`;

const ContactList = styled.ul`
  list-style: none;
  font-size: 24px;
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

export const Info = (props) => {
  let [editMode, setEditMode] = useState(false);

  const handleSubmit = (formData) => {
    props.updateProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const onChangePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };

  return props.profile ? (
    <Container>
      <div>
        <AvatarImage src={props.profile.photos.large || noAvatar} />
        {props.isOwner && (
          <>
            <Input type="file" id="photoFile" onChange={onChangePhoto} />
            <Label for="photoFile">Change avatar</Label>
          </>
        )}
      </div>

      {editMode ? (
        <ProfileForm
          initialValues={props.profile}
          onSubmit={handleSubmit}
          profile={props.profile}
        />
      ) : (
        <InfoContainer>
          <Name>{props.profile.fullName}</Name>
          <Status status={props.status} updateStatus={props.updateStatus} />
          <Divider color="#000" title="Basic information:" orientation="left" />
          <div>
            Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
          </div>
          <div>My skills: {props.profile.lookingForAJobDescription} </div>
          <div>About me: {props.profile.aboutMe}</div>
          <Divider color="#000" title="Contacts:" orientation="left" />
          <ContactList>
            {Object.keys(props.profile.contacts).map((key) => (
              <li key={key}>
                {key}: {props.profile.contacts[key]}
              </li>
            ))}
          </ContactList>
        </InfoContainer>
      )}
      {props.isOwner && !editMode && (
        <Button onClick={() => setEditMode(true)}>Edit page</Button>
      )}
    </Container>
  ) : (
    <Loader />
  );
};
