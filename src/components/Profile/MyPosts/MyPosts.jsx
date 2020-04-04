import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />);

    let newPostElement = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
            <div className={style.MyPosts}>
                <h2>My posts</h2>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={ onAddPost }>Send</button>
                <div className={style.contentNewPosts}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;