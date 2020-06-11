import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm/MyPostsForm';

import {v4} from 'uuid';

const MyPosts = (props) => {

    const addPost = (formData) => {
        props.addPost(v4(),formData.postText,0,null,formData.name);
    }

    return (
        <div className={style.MyPosts}>
            <h2>Мои посты</h2>
            <MyPostsForm onSubmit={addPost} />
            <div className={style.contentNewPosts}>
                    {
                        props.posts.map(post => <Post {...post} toggleLikePost={props.toggleLikePost} 
                            deletePost={props.deletePost} key={post.id}  />)
                    }
                </div>
        </div>
    );
}

export default MyPosts;