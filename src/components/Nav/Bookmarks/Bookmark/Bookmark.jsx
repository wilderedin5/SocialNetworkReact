import React from 'react';
import style from './Bookmark.module.scss';
import { Card, Button } from 'antd';
import DeleteBookmark from './DeleteBookmark/DeleteBookmark';
import { NavLink } from 'react-router-dom';

const Bookmark = (props) => (
    <Card className={style.bookmark} size="small" title={props.theme} extra={props.inBookmarks && <DeleteBookmark toggleSetToBookmarks={props.toggleSetToBookmarks} newsId={props.newsId} />}>
        <p>{props.newsText.substring(0, 100)}.....</p>
        <NavLink to={`/news/${props.newsId}`}>
            <Button type="primary">Открыть новость</Button>
        </NavLink>
    </Card>
)

export default Bookmark;