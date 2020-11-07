import { connect } from 'react-redux';
import { addPost, deletePost, toggleLikePost } from '../../redux/profile-reducer';
import { MyPosts } from './MyPosts';

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts
})

export default connect(mapStateToProps, { addPost, deletePost, toggleLikePost })(MyPosts);