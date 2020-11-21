import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addPost, deletePost, setLike } from "../../redux/profile-reducer";
import { Comment as BaseComment } from "../common/comment";
import Form from "./Form";

const PostsList = styled.div`
  margin-top: 20px;
`;

const StyledComment = styled(BaseComment)`
  margin-bottom: 10px;
`;

const Posts = ({ posts, setLike, deletePost, ...props }) => {
  const handleSubmit = ({ text, author }) => {
    props.addPost(v4(), text, 0, null, author);
  };

  return (
    <div>
      <h2>My posts</h2>
      <Form onSubmit={handleSubmit} />
      <PostsList>
        {posts.map((post) => (
          <StyledComment
            key={post.id}
            onLike={() => setLike(post.id)}
            onRemove={() => deletePost(post.id)}
            {...post}
          />
        ))}
      </PostsList>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

export default connect(mapStateToProps, {
  addPost,
  deletePost,
  setLike,
})(Posts);
