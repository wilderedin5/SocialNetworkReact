import React from 'react';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = (props) => {
    return (
        <div>
            <h1>Закладки</h1>
            { props.bookMarks.length > 0 ?
                props.bookMarks.map(item => <Bookmark theme={item.theme} />)
            :
                <div> Здесь пока пусто, сюда будут попадать новости сохраненные в закладки!</div>
            }
        </div >
    )
}

export default Bookmarks;