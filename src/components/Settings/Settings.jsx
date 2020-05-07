import React from 'react';
import style from './Settings.module.scss';
import { Button } from 'antd';

const Settings = (props) => {
    return(
        <div>
            <div>
                { props.darkTheme ?
                <Button onClick={() => props.setChangeTheme(false)} type="primary">Светлая тема</Button>
                :
                <Button onClick={() => props.setChangeTheme(true)} type="primary">Темная тема</Button>
                }
            </div>
        </div>
    );
}

export default Settings;