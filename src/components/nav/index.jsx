import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { compose } from "redux";
import { withRouter, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { setMark } from "../../redux/news-reducer";
import { getMarks } from "../../redux/selectors/news-selectors";
import { getFriends } from "../../redux/sidebar-reducer";
import { Adverts } from "./adverts";
import { Friends } from "./friends";
import { Marks } from "./marks";

const StyledAdverts = styled(Adverts)`
  margin: 20px 0;
`;

const MenuItem = ({ to, ...props }) => {
  const url = `/${to.toLowerCase()}`;
  return (
    <Menu.Item key={url} {...props}>
      <NavLink to={url} activeClassName="active">
        {to}
      </NavLink>
    </Menu.Item>
  );
};

const NavBar = ({ getFriends, friends, isAuth, setMark, marks, adverts }) => {
  useEffect(() => {
    getFriends(1, 9);
  }, [isAuth]);

  return (
    <div>
      <Menu theme="dark">
        <MenuItem to="Profile" />
        <MenuItem to="Dialogs" />
        <MenuItem to="News" />
        <MenuItem to="Users" />
        <MenuItem to="Help" />
        <MenuItem to="Order-advert" />
      </Menu>
      {isAuth && <Friends friends={friends || []} />}
      <Marks setMark={setMark} marks={marks || []} />
      <StyledAdverts adverts={adverts || []} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  friends: state.sidebar.friends,
  marks: getMarks(state),
  isAuth: state.auth.isAuth,
  adverts: state.adverts.adverts,
});

export default compose(
  connect(mapStateToProps, { setMark, getFriends }),
  withRouter
)(NavBar);
