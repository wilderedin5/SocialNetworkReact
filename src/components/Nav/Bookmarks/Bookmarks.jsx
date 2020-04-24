import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import style from './Bookmarks.module.scss';

const Bookmarks = (props) => {
    return (
        <div className={style.bookmarks}>
            <h1 className={style.title}>Закладки</h1>
            { props.bookMarks.length > 0 ?
                props.bookMarks.map(item => <Bookmark theme={item.theme} />)
            :
                <div> Здесь пока пусто, сюда будут попадать новости сохраненные в закладки!</div>
            }
        </div >
    )
}

export default Bookmarks;