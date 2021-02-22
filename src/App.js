import "antd/dist/antd.css";
import React, { Suspense, useEffect } from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Layout } from "antd";
import { initiliazeApp } from "./redux/app-reducer";
import { Loader } from "./components/common/type";
import NavBar from "./components/nav";
import Login from "./components/login";
import Adverts from "./components/adverts";
import { Footer } from "./components/footer";
import style from "./App.module.scss";
import Header from "./components/header";
const Profile = React.lazy(() => import("./components/profile"));
const Dialogs = React.lazy(() => import("./components/dialogs"));
const Users = React.lazy(() => import("./components/users"));
const News = React.lazy(() => import("./components/news"));
const Help = React.lazy(() => import("./components/help"));
const OrderAdvert = React.lazy(() => import("./components/order-advert"));

const App = (props) => {
  const {
    Header: HeaderContainer,
    Sider,
    Content,
    Footer: FooterContainer,
  } = Layout;
  useEffect(() => {
    props.initiliazeApp();
  }, []);

  return !props.initiliazed ? (
    <Loader />
  ) : (
    <Layout>
      <HeaderContainer className={style.header}>
        <Header />
      </HeaderContainer>
      <Layout>
        {props.isAuth && (
          <Sider>
            <NavBar />
          </Sider>
        )}
        <Content className={style.content}>
          <Suspense fallback={<div>Lazy load в действии!</div>}>
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
      {props.isAuth && (
        <FooterContainer className={style.footer}>
          <Footer />
        </FooterContainer>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  initiliazed: state.app.initiliazed,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initiliazeApp })
)(App);
