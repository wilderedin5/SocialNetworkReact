import React from 'react';
import style from './OneNews.module.scss';

const OneNews = (props) => {
    return (
        <div className={style.oneNews}>
            <div>{props.newsText}</div>
            <div><b>Автор:</b> {props.author}</div>
            <div><b>Дата:</b> {props.date}</div>
            <div><b>Категория:</b> {props.category}</div>
            <button onClick={() => props.deleteNews(props.newsId)} className={style.oneNewsBtn}>Удалить новость</button>
        </div>
    );
}

export default OneNews;