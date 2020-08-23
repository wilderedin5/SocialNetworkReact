import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import CommentAdvert from "../Comment/CommentAdvert";
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

const OneAdvert = (props) => {
  const AddCommentToAdvert = (formData) => {
    props.addCommentToAdvert(
      props.id,
      v4(),
      formData.commentText,
      formData.name,
      false,
      0
    );
  };

  return (
    <div>
      <AdvertBlock>
        <Image src={props.image} />
        <AdvertContent>
          <Title>{props.title}</Title>
          <Content>{props.text}</Content>
          {props.liked ? (
            <Like onClick={() => props.toggleLikeAdvert(props.id)}>
              <DislikeFilled />
              {props.likeCount}
            </Like>
          ) : (
            <Like onClick={() => props.toggleLikeAdvert(props.id)}>
              <LikeOutlined />
              {props.likeCount}
            </Like>
          )}
        </AdvertContent>
      </AdvertBlock>
      <CommentBlock>
        {props.comment.map((comment) => (
          <CommentAdvert
            {...comment}
            toggleLikeCommentFromAdvert={props.toggleLikeCommentFromAdvert}
            advertId={props.id}
            deleteCommentFromAdvert={props.deleteCommentFromAdvert}
          />
        ))}
      </CommentBlock>
      <AdvertForm onSubmit={AddCommentToAdvert} />
    </div>
  );
};

export default OneAdvert;
