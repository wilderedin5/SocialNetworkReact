import React from 'react';
import style from './News.module.scss';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';
 
const News = ({addNewNews,news,toggleSetToBookmarks,deleteNews}) => {
    const onSubmit = (formData) => {
        addNewNews(formData.newsText, formData.theme, formData.author, formData.category);
    }
    return(
        <div className={style.news}>
            {
                news.map(news => <OneNews key={news.id} deleteNews={deleteNews} newsText={news.newsText} author={news.author} toggleSetToBookmarks={toggleSetToBookmarks}
                    newsId={news.id} date={news.date} category={news.category} theme={news.theme} inBookmarks={news.inBookmarks} />)
            }
            <NewsForm onSubmit={onSubmit} />
        </div>
    );
}

export default News;



