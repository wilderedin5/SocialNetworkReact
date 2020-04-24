import React from 'react';
import style from './OneNews.module.scss';

const OneNews = ({newsText,theme,author,date,category,inBookmarks,deleteNews,newsId,toggleSetToBookmarks}) => {
    return (
        <div className={style.oneNews}>
            <div>{newsText}</div>
            <div><b>Тема:</b> {theme}</div>
            <div><b>Автор:</b> {author}</div>
            <div><b>Дата:</b> {date}</div>
            <div><b>Категория:</b> {category}</div>
            <div className={style.btnLine}>
                { inBookmarks ?
                    <button onClick={() => toggleSetToBookmarks(newsId,false)} className={style.oneNewsBtn}>Убрать из закладок</button>
                    :
                    <button onClick={() => toggleSetToBookmarks(newsId,true)} className={style.oneNewsBtn}>Добавить в закладки</button>
                }
                <button onClick={() => deleteNews(newsId)} className={style.oneNewsBtn}>Удалить новость</button>
            </div>
        </div>
    );
}

export default OneNews;