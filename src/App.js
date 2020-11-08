import 'antd/dist/antd.css';
import React, { Suspense, useEffect } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Layout } from 'antd';
import { initiliazeApp } from './redux/app-reducer';
import { Preloader } from './components/common/Preloader/Preloader';
import NavBar from './components/Nav/NavBar';
import Login from './components/Login/Login';
import Adverts from './components/Adverts/Adverts';
import Footer from './components/Footer/Footer';
import style from './App.module.scss';
import Header from './components/Header/Header';
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Users = React.lazy(() => import('./components/Users/Users'));
const News = React.lazy(() => import('./components/News/News'));
const Help = React.lazy(() => import('./components/Help/Help'));
const OrderAdvert = React.lazy(() => import('./components/OrderAdvert/OrderAdvert'));


const App = (props) => {
  useEffect(() => {
    props.initiliazeApp();
  }, []);
  if (!props.initiliazed) {
    return <Preloader />
  }
  const { Header: HeaderContainer, Sider, Content, Footer: FooterContainer } = Layout;
  return (
    <Layout>
      <HeaderContainer className={style.header}>
        <Header />
      </HeaderContainer>
      <Layout>
        {props.isAuth &&
          <Sider>
            <NavBar />
          </Sider>
        }
        <Content className={style.content}>
          <Suspense fallback={<div>Идет загрузка компоненты! Lazy load в действии!</div>}>
            <Switch>
              <Route path="/dialogs/:userId?" render={() => <Dialogs />} />
              <Route path="/profile/:userId?" render={() => <Profile />} />
              <Route path="/users" render={() => <Users />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/news/:newsId?" render={() => <News />} />
              <Route path="/help" render={() => <Help />} />
              <Route path="/adverts/:advertId?" render={() => <Adverts />} />
              <Route path="/order-advert" render={() => <OrderAdvert />} />
              <Redirect from="/" to="/profile" />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
      {props.isAuth &&
        <FooterContainer className={style.footer}>
          <Footer />
        </FooterContainer>
      }
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  initiliazed: state.app.initiliazed,
  isAuth: state.auth.isAuth
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initiliazeApp }))(App);
