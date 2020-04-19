import React from 'react';
import style from './News.module.css';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';
 
const News = (props) => {
    const onSubmit = (formData) => {
        props.addNewNews(formData.newsText, formData.author, formData.category);
    }
    return(
        <div className={style.news}>
            {
                props.news.map(news => <OneNews key={news.id} deleteNews={props.deleteNews} newsText={news.newsText} author={news.author} 
                    newsId={news.id} date={news.date} category={news.category} />)
            }
            <NewsForm onSubmit={onSubmit} />
        </div>
    );
}

export default News;



