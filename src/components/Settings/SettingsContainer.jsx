import { connect } from 'react-redux';
import { setChangeTheme } from '../../redux/app-reducer';
import Settings from './Settings';

const mapStateToProps = (state) => {
    return {
        darkTheme: state.app.darkTheme
    }
}

export default connect(mapStateToProps,{setChangeTheme})(Settings);