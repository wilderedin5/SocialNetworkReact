import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard, Button } from "antd";
import { NavLink } from "react-router-dom";
import DeleteBookmark from "./DeleteBookmark/DeleteBookmark";

const Card = styled(BaseCard)`
  margin-bottom: 5px;
  font-size: 10px;
  text-align: justify;
`;

const Bookmark = ({
  theme,
  inBookmarks,
  toggleBookmarks,
  newsId,
  newsText,
}) => (
  <Card
    size="small"
    title={theme}
    extra={
      inBookmarks && (
        <DeleteBookmark toggleBookmarks={toggleBookmarks} newsId={newsId} />
      )
    }
  >
    <p>{newsText.substring(0, 100)}.....</p>
    <NavLink to={`/news/${newsId}`}>
      <Button type="primary">Open news</Button>
    </NavLink>
  </Card>
);

export default Bookmark;
