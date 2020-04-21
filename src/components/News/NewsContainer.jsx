import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNewNews,addToBookmarks } from '../../redux/news-reducer';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const NewsContainer = (props) => {
    return(
        <News addNewNews={props.addNewNews} deleteNews={props.deleteNews} news={props.news} addToBookmarks={props.addToBookmarks} />
    );
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{deleteNews,addNewNews,addToBookmarks})
)(NewsContainer);