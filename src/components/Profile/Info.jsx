import React, { useState } from "react";
import styled from "@emotion/styled";
import noAvatar from "../../assets/image/noAvatar.jpg";
import { Divider } from "../common/type";
import { Button } from "../common/type";
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
  :hover {
    border: 1px solid rgb(45, 80, 165);
    color: #fff;
    background: rgb(45, 80, 165);
  }
`;

const InfoContainer = styled.div`
  padding-left: 30px;
`;

const Name = styled.div`
  font-size: 28px;
  line-height: 1;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 0;
`;

export const Info = ({
  editProfile,
  editPhoto,
  isOwner,
  profile,
  editStatus,
  status,
}) => {
  let [editMode, setEditMode] = useState(false);

  const handleSubmit = (formData) => {
    editProfile(formData);
    setEditMode(false);
  };

  const onChangePhoto = (e) => {
    if (e.target.files.length) {
      editPhoto(e.target.files[0]);
    }
  };

  return (
    profile && (
      <Container>
        <div>
          <AvatarImage src={profile.photos.large || noAvatar} />
          {isOwner && (
            <>
              <Input type="file" id="photoFile" onChange={onChangePhoto} />
              <Label for="photoFile">Click to change avatar</Label>
            </>
          )}
        </div>

        {editMode ? (
          <ProfileForm onSubmit={handleSubmit} profile={profile} />
        ) : (
          <InfoContainer>
            <Name>{profile.fullName}</Name>
            <Status status={status} editStatus={editStatus} />
            <Divider color="#000" title="About me" orientation="left" />
            <div>
              Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>My skills: {profile.lookingForAJobDescription} </div>
            <div>About me: {profile.aboutMe}</div>
            <Divider color="#000" title="Contacts:" orientation="left" />

            {Object.keys(profile.contacts).map((key) => (
              <div key={key}>
                {key}: {profile.contacts[key]}
              </div>
            ))}
          </InfoContainer>
        )}
        {isOwner && !editMode && (
          <StyledButton onClick={() => setEditMode(true)}>
            Edit page
          </StyledButton>
        )}
      </Container>
    )
  );
};
