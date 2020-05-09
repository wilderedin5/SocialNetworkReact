import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNewNews,toggleSetToBookmarks } from '../../redux/news-reducer';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,{deleteNews,addNewNews,toggleSetToBookmarks})
)(News);