import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import Post from "../Post/Post";
import AdvertForm from "../AdvertForm/AdvertForm";

const Image = styled.img`
  width: 100%;
  height: 350px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000;
`;

const Content = styled.div`
  font-size: 18px;
  font-style: italic;
  color: #000;
`;

const CommentBlock = styled.div`
  margin-top: 30px;
`;

const AdvertBlock = styled.div`
  border: 1px solid #000;
`;

const AdvertContent = styled.div`
  padding: 10px;
`;

const Like = styled.span`
  color: #000;
`;

const Advert = ({
  image,
  title,
  text,
  liked,
  id,
  likeComment,
  comment,
  deleteComment,
  likeCount,
  addComment,
  toggleLike,
}) => {
  const sendComment = (formData) => {
    addComment(id, v4(), formData.commentText, formData.name, false, 0);
  };

  return (
    <div>
      <AdvertBlock>
        <Image src={image} />
        <AdvertContent>
          <Title>{title}</Title>
          <Content>{text}</Content>
          <Like onClick={() => toggleLike(id)}>
            {liked ? <DislikeFilled /> : <LikeOutlined />}
            {likeCount}
          </Like>
        </AdvertContent>
      </AdvertBlock>
      <CommentBlock>
        {comment.map((comment) => (
          <Post
            {...comment}
            likeComment={likeComment}
            advertId={id}
            deleteComment={deleteComment}
          />
        ))}
      </CommentBlock>
      <AdvertForm onSubmit={sendComment} />
    </div>
  );
};

export default Advert;
