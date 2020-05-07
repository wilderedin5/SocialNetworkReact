import React from 'react';
import style from './OneNews.module.scss';
import { Button } from 'antd';

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
                    <Button onClick={() => toggleSetToBookmarks(newsId,false)} className={style.oneNewsBtn}>Убрать из закладок</Button>
                    :
                    <Button onClick={() => toggleSetToBookmarks(newsId,true)} className={style.oneNewsBtn}>Добавить в закладки</Button>
                }
                <Button onClick={() => deleteNews(newsId)} className={style.oneNewsBtn}>Удалить новость</Button>
            </div>
        </div>
    );
}

export default OneNews;