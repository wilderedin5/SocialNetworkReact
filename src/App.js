import React, { Suspense } from 'react';
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initiliazeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import NavContainer from './components/Nav/NavContainer';
import cn from "classnames";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initiliazeApp();
  }
  render() {
    if (!this.props.initiliazed) {
      return <Preloader />
    }
    return (
      <div className={cn(style.app, style.container, { [style.darkMode]: this.props.darkTheme })}>
        <div className={style.appWrapper}>
          <div className={style.header}>
            <HeaderContainer />
          </div>
          <div className={style.sidebar}>
            <NavContainer />
          </div>
          <div className={style.appWrapperContent}>
            <Suspense fallback={<div>Идет загрузка компоненты! Lazy load в действии!</div>}>
              <Switch>
                <Route path="/dialogs/:userId?" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/news" render={() => <NewsContainer />} />
                <Route path="/settings" render={() => <SettingsContainer />} />
                <Redirect from="/" to="/profile" />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initiliazed: state.app.initiliazed,
    darkTheme: state.app.darkTheme
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initiliazeApp }))(App);
