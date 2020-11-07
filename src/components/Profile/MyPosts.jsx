import React from "react";
import styled from "@emotion/styled";
import { v4 } from "uuid";
import { Post } from "./Post";
import MyPostsForm from "./MyPostsForm";

const Posts = styled.div`
  margin-top: 20px;
`;

export const MyPosts = ({ posts, toggleLikePost, deletePost, ...props }) => {
  const addPost = ({ postText, name }) => {
    props.addPost(v4(), postText, 0, null, name);
  };

  return (
    <div>
      <h2>My posts</h2>
      <MyPostsForm onSubmit={addPost} />
      <Posts>
        {posts.map((post) => (
          <Post
            {...post}
            toggleLikePost={toggleLikePost}
            deletePost={deletePost}
            key={post.id}
          />
        ))}
      </Posts>
    </div>
  );
};
