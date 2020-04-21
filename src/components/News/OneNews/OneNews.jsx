import React from 'react';
import style from './OneNews.module.scss';

const OneNews = (props) => {
    return (
        <div className={style.oneNews}>
            <div>{props.newsText}</div>
            <div><b>Тема:</b> {props.theme}</div>
            <div><b>Автор:</b> {props.author}</div>
            <div><b>Дата:</b> {props.date}</div>
            <div><b>Категория:</b> {props.category}</div>
            <div className={style.btnLine}>
                <button onClick={() => props.addToBookmarks(props.newsId)} className={style.oneNewsBtn}>Добавить в закладки</button>
                <button onClick={() => props.deleteNews(props.newsId)} className={style.oneNewsBtn}>Удалить новость</button>
            </div>
        </div>
    );
}

export default OneNews;