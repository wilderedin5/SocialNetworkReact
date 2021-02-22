import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "../common/type";
import { Status } from "./profile-status";
import ProfileForm from "./profile-form";
import { ProfileAvatar } from "./profile-avatar";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 224px auto;
  grid-column-gap: 20px;
`;

const Name = styled.div`
  font-size: 28px;
  line-height: 1;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Info = ({
  editProfile,
  setPhoto,
  isOwner,
  profile,
  setStatus,
  status,
}) => {
  const [editMode, setEditMode] = useState(false);
  const contacts = Object.keys(profile.contacts);

  const handleSubmit = (formData) => {
    editProfile(formData);
    setEditMode(false);
  };

  return (
    <Container>
      <ProfileAvatar
        setPhoto={setPhoto}
        isOwner={isOwner}
        image={profile.photos.large}
      />
      {editMode ? (
        <ProfileForm onSubmit={handleSubmit} profile={profile} />
      ) : (
        <div>
          <Name>{profile.fullName}</Name>
          <Status status={status} setStatus={setStatus} />

          <b>About me:</b>
          <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
          <div>My skills: {profile.lookingForAJobDescription} </div>
          <div>About me: {profile.aboutMe}</div>

          <b>Contacts:</b>
          {contacts.map((contact) => (
            <div key={contact}>
              {contact}: {profile.contacts[contact]}
            </div>
          ))}
          {isOwner && (
            <StyledButton onClick={() => setEditMode(true)}>
              Edit page
            </StyledButton>
          )}
        </div>
      )}
    </Container>
  );
};
