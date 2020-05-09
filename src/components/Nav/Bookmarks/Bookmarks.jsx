import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import style from './Bookmarks.module.scss';
import { Divider } from 'antd';

const Bookmarks = (props) => {
    return (
        <div className={style.bookmarks}>
            <Divider className={style.bookMarksTitle} orientation="center">Закладки</Divider>
            { props.bookMarks.length > 0 ?
                props.bookMarks.map(bookmark => <Bookmark toggleSetToBookmarks={props.toggleSetToBookmarks} newsId={bookmark.id} inBookmarks={bookmark.inBookmarks} newsText={bookmark.newsText} theme={bookmark.theme} />)
            :
                <div> Здесь пока пусто, сюда будут попадать новости сохраненные в закладки!</div>
            }
        </div >
    )
}

export default Bookmarks;