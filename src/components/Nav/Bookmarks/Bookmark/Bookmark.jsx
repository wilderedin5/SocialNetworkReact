import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard, Button } from "antd";
import { NavLink } from "react-router-dom";

const Delete = styled.div`
  color: #000;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

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
        <Delete onClick={() => toggleBookmarks(newsId, false)}>&#9932;</Delete>
      )
    }
  >
    {newsText.substring(0, 100)}.....
    <NavLink to={`/news/${newsId}`}>
      <Button type="primary">Open news</Button>
    </NavLink>
  </Card>
);

export default Bookmark;
