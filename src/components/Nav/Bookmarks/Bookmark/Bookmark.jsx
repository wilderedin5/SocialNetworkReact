import React from 'react';
import style from './Bookmark.module.scss';
import { Card } from 'antd';
import DeleteBookmark from './DeleteBookmark/DeleteBookmark';

const Bookmark = (props) => {
    return (
        <Card className={style.bookmark} size="small" title={props.theme} extra={props.inBookmarks && <DeleteBookmark toggleSetToBookmarks={props.toggleSetToBookmarks} newsId={props.newsId} />}>
            <p>{props.newsText.substring(0, 100)}.....</p>
        </Card>
    )
}

export default Bookmark;