import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addPost, deletePost, toggleLike } from "../../redux/profile-reducer";
import { Post } from "./Post";
import Form from "./Form";

const PostsList = styled.div`
  margin-top: 20px;
`;

const Posts = ({ posts, toggleLike, deletePost, ...props }) => {
  const handleSubmit = ({ postText, name }) => {
    props.addPost(v4(), postText, 0, null, name);
  };

  return (
    <div>
      <h2>My posts</h2>
      <Form onSubmit={handleSubmit} />
      <PostsList>
        {posts.map((post) => (
          <Post
            {...post}
            toggleLike={() => toggleLike(post.id)}
            deletePost={() => deletePost(post.id)}
            key={post.id}
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
  toggleLike,
})(Posts);
