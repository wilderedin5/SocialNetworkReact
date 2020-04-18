import MyPosts from './MyPosts';
import {addPost,deletePost} from './../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps,{addPost,deletePost})(MyPosts);