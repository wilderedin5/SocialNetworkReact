import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import {toggleSetToBookmarks} from '../../redux/news-reducer';
import { getBookmarks } from '../../redux/Selectors/news-selectors';

const NavContainer = (props) => {
    return (
        <Nav isAuth={props.isAuth} friends={props.friends} bookMarks={props.bookMarks} toggleSetToBookmarks={props.toggleSetToBookmarks} />
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        bookMarks: getBookmarks(state),
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {toggleSetToBookmarks})(NavContainer);
