import MyPosts from './MyPosts';
import { addPost, deletePost, toggleLikePost } from './../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts
})

export default connect(mapStateToProps, { addPost, deletePost, toggleLikePost })(MyPosts);