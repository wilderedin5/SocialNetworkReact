import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) =>
    !props.isAuth ? <Redirect to="/login" /> : <Component {...props} />;

  return connect(mapStateToProps)(RedirectComponent);
};
