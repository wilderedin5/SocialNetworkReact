import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { connect } from "react-redux";
import {
  addPost,
  deletePost,
  changeLikeCount,
} from "../../redux/profile-reducer";
import { Comment as BaseComment } from "../common/comment";
import Form from "./form";

const StyledComment = styled(BaseComment)`
  & + & {
    margin-top: 10px;
  }
`;

const StyledForm = styled(Form)`
  margin-top: 20px;
`;

const Posts = ({ posts, changeLikeCount, deletePost, ...props }) => {
  const handleSubmit = ({ text, author }) => {
    props.addPost(v4(), text, 0, null, author);
  };

  return (
    <div>
      {posts.map((post) => (
        <StyledComment
          key={post.id}
          changeLikeCount={(hasLike) => changeLikeCount(post.id, hasLike)}
          onRemove={() => deletePost(post.id)}
          {...post}
        />
      ))}
      <StyledForm onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

export default connect(mapStateToProps, {
  addPost,
  deletePost,
  changeLikeCount,
})(Posts);
