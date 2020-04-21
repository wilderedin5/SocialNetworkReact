import React from 'react';
import style from './Settings.module.scss';

const Settings = (props) => {
    return(
        <div>
            <div>
                { props.darkTheme ?
                <button onClick={() => props.changeTheme(false)}>Светлая тема</button>
                :
                <button onClick={() => props.changeTheme(true)}>Темная тема</button>
                }
            </div>
        </div>
    );
}

export default Settings;