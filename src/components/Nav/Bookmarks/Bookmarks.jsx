import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import style from './Bookmarks.module.scss';

const Bookmarks = (props) => {
    return (
        <div className={style.bookmarks}>
            <h1 className={style.title}>Закладки</h1>
            { props.bookMarks.length > 0 ?
                props.bookMarks.map(bookmark => <Bookmark toggleSetToBookmarks={props.toggleSetToBookmarks} newsId={bookmark.id} inBookmarks={bookmark.inBookmarks} newsText={bookmark.newsText} theme={bookmark.theme} />)
            :
                <div> Здесь пока пусто, сюда будут попадать новости сохраненные в закладки!</div>
            }
        </div >
    )
}

export default Bookmarks;