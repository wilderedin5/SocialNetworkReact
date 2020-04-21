import React from 'react';
import { connect } from 'react-redux';
import { setChangeTheme } from '../../redux/app-reducer';
import Settings from './Settings';

const SettingsContainer = (props) => {
    return (
        <Settings darkTheme={props.darkTheme} changeTheme={props.setChangeTheme} />
    )
}

const mapStateToProps = (state) => {
    return {
        darkTheme: state.app.darkTheme
    }
}

export default connect(mapStateToProps,{setChangeTheme})(SettingsContainer);