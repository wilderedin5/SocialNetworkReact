import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

const NavContainer = (props) => {
    return (
        <Nav friends={props.friends} />
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

export default connect(mapStateToProps, {})(NavContainer);
