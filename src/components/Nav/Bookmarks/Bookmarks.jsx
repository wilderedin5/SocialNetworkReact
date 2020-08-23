import React from "react";
import styled from "@emotion/styled";
import { Divider as BaseDivider } from "antd";
import Bookmark from "./Bookmark/Bookmark";

const Container = styled.div`
  padding: 0 20px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Divider = styled(BaseDivider)`
  font-size: 18px;
`;

const Bookmarks = ({ bookMarks, toggleSetToBookmarks }) => (
  <Container>
    <Divider style={{ color: "#fff" }} orientation="center">
      Закладки
    </Divider>
    {bookMarks.length > 0 ? (
      bookMarks.map((bookmark) => (
        <Bookmark
          toggleSetToBookmarks={toggleSetToBookmarks}
          newsId={bookmark.id}
          inBookmarks={bookmark.inBookmarks}
          newsText={bookmark.newsText}
          theme={bookmark.theme}
        />
      ))
    ) : (
      <div>
        {" "}
        Здесь пока пусто, сюда будут попадать новости сохраненные в закладки!
      </div>
    )}
  </Container>
);

export default Bookmarks;
