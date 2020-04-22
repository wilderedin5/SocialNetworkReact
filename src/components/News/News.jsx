import React from 'react';
import style from './News.module.scss';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';
 
const News = (props) => {
    const onSubmit = (formData) => {
        props.addNewNews(formData.newsText, formData.theme, formData.author, formData.category);
    }
    return(
        <div className={style.news}>
            {
                props.news.map(news => <OneNews key={news.id} deleteNews={props.deleteNews} newsText={news.newsText} author={news.author} deleteFromBookmarks={props.deleteFromBookmarks}
                    newsId={news.id} date={news.date} category={news.category} addToBookmarks={props.addToBookmarks} theme={news.theme} inBookmarks={news.inBookmarks} />)
            }
            <NewsForm onSubmit={onSubmit} />
        </div>
    );
}

export default News;



