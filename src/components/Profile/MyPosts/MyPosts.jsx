import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm/MyPostsForm';

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);
    

    const addPost = (formData) => {
        props.addPost(formData.postText);
    }


    return (
            <div className={style.MyPosts}>
                <h2>My posts</h2>
                <MyPostsForm onSubmit={addPost} />
                <div className={style.contentNewPosts}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;