import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import {toggleSetToBookmarks} from '../../redux/news-reducer';
import { getBookmarks } from '../../redux/Selectors/news-selectors';
import { useEffect } from 'react';
import { requestForLastFriends } from '../../redux/sidebar-reducer';

const NavContainer = (props) => {
    useEffect(() => {
        props.requestForLastFriends(1,9);
    },[])
    return (
        <Nav advertising={props.advertising} isAuth={props.isAuth} friends={props.friends} bookMarks={props.bookMarks} toggleSetToBookmarks={props.toggleSetToBookmarks} />
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        bookMarks: getBookmarks(state),
        isAuth: state.auth.isAuth,
        advertising: state.adverts.advertising
    }
}

export default connect(mapStateToProps, {toggleSetToBookmarks,requestForLastFriends})(NavContainer);
