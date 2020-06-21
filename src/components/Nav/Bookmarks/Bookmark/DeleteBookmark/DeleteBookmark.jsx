import React from 'react'
import style from './DeleteBookmark.module.scss';

const DeleteBookmark = (props) => (
    <div onClick={() => props.toggleSetToBookmarks(props.newsId, false)} className={style.bookmarkDelete}>&#9932;</div>
)

export default DeleteBookmark;