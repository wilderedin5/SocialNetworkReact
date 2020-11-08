import React from "react";
import styled from "@emotion/styled";
import { Divider } from "antd";
import { Bookmark } from "./Bookmark";

const Container = styled.div`
  padding: 0 20px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Bookmarks = ({ bookMarks, toggleBookmarks }) => (
  <Container>
    <Divider style={{ color: "#fff" }} orientation="center">
      Bookmarks
    </Divider>
    {bookMarks.length > 0
      ? bookMarks.map((bookmark) => (
        <Bookmark
          toggleBookmarks={() => toggleBookmarks(bookmark.id, false)}
          {...bookmark}
        />
      ))
      : "It is empty for now, news saved in bookmarks will fall here!"}
  </Container>
);
