import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNewNews,toggleSetToBookmarks } from '../../redux/news-reducer';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const NewsContainer = ({addNewNews,deleteNews,news,toggleSetToBookmarks}) => {
    return(
        <News addNewNews={addNewNews} deleteNews={deleteNews} news={news} toggleSetToBookmarks={toggleSetToBookmarks} />
    );
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{deleteNews,addNewNews,toggleSetToBookmarks})
)(NewsContainer);