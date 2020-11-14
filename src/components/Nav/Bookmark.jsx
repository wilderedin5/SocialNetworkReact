import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard, Button } from "antd";
import { NavLink } from "react-router-dom";

const Delete = styled.div`
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Card = styled(BaseCard)`
  margin-bottom: 5px;
  font-size: 10px;
  text-align: justify;
`;

export const Bookmark = ({ theme, toggleBookmarks, id, newsText }) => (
  <Card
    size="small"
    title={theme}
    extra={<Delete onClick={toggleBookmarks}>&#9932;</Delete>}
  >
    {newsText.substring(0, 100)}.....
    <NavLink to={`/news/${id}`}>
      <Button type="primary">Open news</Button>
    </NavLink>
  </Card>
);
