import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNewNews,toggleSetToBookmarks } from '../../redux/news-reducer';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{deleteNews,addNewNews,toggleSetToBookmarks})
)(News);