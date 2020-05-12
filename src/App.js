import 'antd/dist/antd.css';
import React, { Suspense, useEffect } from 'react';
import style from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { initiliazeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import NavContainer from './components/Nav/NavContainer';
import LoginContainer from './components/Login/LoginContainer';
import { Layout } from 'antd';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const HelpContainer = React.lazy(() => import('./components/Help/HelpContainer'))


const App = (props) => {
  useEffect(() => {
    props.initiliazeApp();
  }, []);
  if (!props.initiliazed) {
    return <Preloader />
  }
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header className={style.header}>
        <HeaderContainer />
      </Header>
      <Layout>
        {props.isAuth &&
          <Sider>
            <NavContainer />
          </Sider>
        }
        <Content className={style.content}>
          <Suspense fallback={<div>Идет загрузка компоненты! Lazy load в действии!</div>}>
            <Switch>
              <Route path="/dialogs/:userId?" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="/news/:newsId?" render={() => <NewsContainer />} />
              <Route path="/help" render={() => <HelpContainer />} />
              <Redirect from="/" to="/profile" />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    initiliazed: state.app.initiliazed,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initiliazeApp }))(App);
