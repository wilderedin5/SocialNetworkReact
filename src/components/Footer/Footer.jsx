import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";

const Container = styled.div`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const Footer = ({ copyright }) => <Container>{copyright}</Container>;

const mapStateToProps = (state) => ({
  copyright: state.footer.copyright
});

export default connect(mapStateToProps, {})(Footer)