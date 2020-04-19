import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNewNews } from '../../redux/news-reducer';

const NewsContainer = (props) => {
    return(
        <News addNewNews={props.addNewNews} deleteNews={props.deleteNews} news={props.news} />
    );
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

export default connect(mapStateToProps,{deleteNews,addNewNews})(NewsContainer);