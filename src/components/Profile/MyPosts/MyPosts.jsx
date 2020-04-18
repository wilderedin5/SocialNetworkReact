import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm/MyPostsForm';

const MyPosts = (props) => {

    const addPost = (formData) => {
        props.addPost(formData.postText);
    }

    return (
        <div className={style.MyPosts}>
            <h2>My posts</h2>
            <MyPostsForm onSubmit={addPost} />
            <div className={style.contentNewPosts}>
                    {
                        props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />);
                    }
                </div>
        </div>
    );
}

export default MyPosts;