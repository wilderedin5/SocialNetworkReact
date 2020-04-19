import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initiliazeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import NavContainer from './components/Nav/NavContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initiliazeApp();
  }
  render() {
    if (!this.props.initiliazed) {
      return <Preloader />
    }
    return (
      <div className="app">
        <div className="container">
          <div className="app-wrapper">
            <div className="header">
            <HeaderContainer />
            </div>
            <div className="sidebar">
            <NavContainer />
            </div>
            <div className="app-wrapper-content">
              <Suspense fallback={<div>Идет загрузка компоненты! Lazy load в действии!</div>}>
                <Switch>
                  <Route path="/dialogs" render={() => <DialogsContainer />} />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                  <Route path="/users" render={() => <UsersContainer />} />
                  <Route path="/login" render={() => <Login />} />
                  <Route path="/news" render={() => <NewsContainer />} />
                  <Route path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
                  <Redirect from="/" to="/profile" />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initiliazed: state.app.initiliazed
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initiliazeApp }))(App);
