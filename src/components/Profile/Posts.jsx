import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { managePost, changeLikeCount } from "../../redux/profile-reducer";
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

const Posts = ({ posts, changeLikeCount, managePost }) => {
  const handleSubmit = ({ text, author }) => {
    const id = v4();
    managePost(id, { id, text, likeCount: 0, hasLike: null, author });
  };

  return (
    <div>
      {posts.map((post) => (
        <StyledComment
          key={post.id}
          changeLikeCount={(hasLike) => changeLikeCount(post.id, hasLike)}
          onRemove={() => managePost(post.id)}
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
  managePost,
  changeLikeCount,
})(Posts);
