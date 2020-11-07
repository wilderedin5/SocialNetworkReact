import React from "react";
import styled from "@emotion/styled";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";

const Image = styled.img`
  width: 100%;
  height: 350px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const Content = styled.div`
  font-size: 18px;
`;

const Container = styled.div`
  margin-bottom: 10px;    
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const Like = styled.span`
  cursor: pointer;
`;

export const AdvertContent = ({ image, title, text, id, liked, likeCount, toggleLike }) => (
  <Container>
    <Image src={image} />
    <div>
      <Title>{title}</Title>
      <Content>{text}</Content>
      <Like onClick={() => toggleLike(id)}>
        {liked ? <DislikeFilled /> : <LikeOutlined />}
        {likeCount}
      </Like>
    </div>
  </Container>
)