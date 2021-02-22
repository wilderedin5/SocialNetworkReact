import React from "react";
import styled from "@emotion/styled";
import NoImg from "../../assets/image/NoImg.jpg";

const Container = styled.div``;

const AvatarImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
`;

const Label = styled.label`
  font-weight: 700;
  border: 1px solid grey;
  padding: 10px 20px;
  cursor: pointer;

  :hover {
    border: 1px solid rgb(45, 80, 165);
    color: #fff;
    background: rgb(45, 80, 165);
  }
`;

export const ProfileAvatar = ({ setPhoto, isOwner, image, className }) => {
  const onChangePhoto = (e) => {
    const photoSelected = !!e.target.files.length;

    if (photoSelected) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <Container className={className}>
      <AvatarImage src={image || NoImg} />
      {isOwner && (
        <>
          <Input type="file" id="photoFile" onChange={onChangePhoto} />
          <Label htmlFor="photoFile">Click to change avatar</Label>
        </>
      )}
    </Container>
  );
};
