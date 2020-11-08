import React from "react";
import { connect } from "react-redux"
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Cards } from "./Cards";
import { Faq } from "./Faq";

const Help = ({ help, contacts }) => (
    <div>
        <Faq help={help} />
        <Cards contacts={contacts} />
    </div>
);

const mapStateToProps = (state) => ({
    help: state.help.helpQA,
    contacts: state.help.contacts
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(Help);