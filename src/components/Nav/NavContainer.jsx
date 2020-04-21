import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import { getBookmarks } from '../../redux/Selectors/news-selectors';

const NavContainer = (props) => {
    return (
        <Nav friends={props.friends} bookMarks={props.bookMarks} />
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        bookMarks: getBookmarks(state)
    }
}

export default connect(mapStateToProps, {})(NavContainer);
