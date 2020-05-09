import React from 'react';
import style from './News.module.scss';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';

const News = ({ addNewNews, news, toggleSetToBookmarks, deleteNews, match }) => {
    const newsId = match.params.newsId;
    const onSubmit = (formData) => {
        addNewNews(formData.newsText, formData.theme, formData.author, formData.category);
    }
    return (
        <div className={style.news}>
            {newsId ?
                news.filter(news => newsId === String(news.id)).map(news => <OneNews key={news.id} deleteNews={deleteNews} newsText={news.newsText} author={news.author} toggleSetToBookmarks={toggleSetToBookmarks}
                    newsOpened={newsId} newsId={news.id} date={news.date} category={news.category} theme={news.theme} inBookmarks={news.inBookmarks} />)
                :
                news.map(news => <OneNews key={news.id} deleteNews={deleteNews} newsText={news.newsText} author={news.author} toggleSetToBookmarks={toggleSetToBookmarks}
                    newsOpened={newsId} newsId={news.id} date={news.date} category={news.category} theme={news.theme} inBookmarks={news.inBookmarks} />)
            }
            {!newsId &&
                <NewsForm onSubmit={onSubmit} />
            }

        </div>
    );
}

export default News;



