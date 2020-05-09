import React from 'react';
import style from './OneNews.module.scss';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const OneNews = ({ newsOpened, newsText, theme, author, date, category, inBookmarks, deleteNews, newsId, toggleSetToBookmarks }) => {
    return (
        <div className={style.oneNews}>
            {newsOpened ?
                <div>{newsText}</div>
                :
                <div>{newsText.substring(0, 200)}.....</div>
            }
            <div><b>Тема:</b> {theme}</div>
            <div><b>Автор:</b> {author}</div>
            <div><b>Дата:</b> {date}</div>
            <div><b>Категория:</b> {category}</div>
            <div className={style.btnLine}>
                {inBookmarks ?
                    <Button onClick={() => toggleSetToBookmarks(newsId, false)} className={style.oneNewsBtn}>Убрать из закладок</Button>
                    :
                    <Button onClick={() => toggleSetToBookmarks(newsId, true)} className={style.oneNewsBtn}>Добавить в закладки</Button>
                }
                <Button onClick={() => deleteNews(newsId)} className={style.oneNewsBtn}>Удалить новость</Button>
                {newsOpened ?
                    <NavLink to={`/news`}>
                        <Button>Вернуться на страницу новостей</Button>
                    </NavLink>
                    :
                    <NavLink to={`/news/${newsId}`}>
                        <Button>Перейти на страницу новости</Button>
                    </NavLink>
                }
            </div>
        </div>
    );
}

export default OneNews;