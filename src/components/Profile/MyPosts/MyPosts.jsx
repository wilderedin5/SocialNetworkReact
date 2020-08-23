import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm/MyPostsForm";

const Container = styled.div``;

const NewPost = styled.div`
  margin-top: 20px;
`;

const MyPosts = (props) => {
  const addPost = (formData) => {
    props.addPost(v4(), formData.postText, 0, null, formData.name);
  };

  return (
    <Container>
      <h2>My posts</h2>
      <MyPostsForm onSubmit={addPost} />
      <NewPost>
        {props.posts.map((post) => (
          <Post
            {...post}
            toggleLikePost={props.toggleLikePost}
            deletePost={props.deletePost}
            key={post.id}
          />
        ))}
      </NewPost>
    </Container>
  );
};

export default MyPosts;
