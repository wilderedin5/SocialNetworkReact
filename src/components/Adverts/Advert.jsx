import React from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import Form from "./form";
import { Comments } from "./comments";
import { Content } from "./content";

const StyledContent = styled(Content)`
  margin-bottom: 10px;
`;

export const Advert = ({ contentProps, id, commentProps, onManage }) => {
  const handleSubmit = ({ text, author }) => {
    const messageId = v4();
    onManage(id, messageId, { id: messageId, text, author, likeCount: 0 });
  };

  return (
    <div>
      <StyledContent {...contentProps} />
      <Comments {...commentProps} onManage={onManage} id={id} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
