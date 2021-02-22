import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Cards } from "./cards";
import { Faq } from "./faq";

const StyledCards = styled(Cards)`
  margin-top: 50px;
`;

const Help = ({ help, contacts }) => (
  <div>
    <Faq help={help} />
    <StyledCards contacts={contacts} />
  </div>
);

const mapStateToProps = (state) => ({
  help: state.help.helpQA,
  contacts: state.help.contacts,
});

export default compose(withAuthRedirect, connect(mapStateToProps, {}))(Help);
