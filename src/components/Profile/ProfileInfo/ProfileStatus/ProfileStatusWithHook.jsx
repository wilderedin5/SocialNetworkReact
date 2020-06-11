import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.scss';

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {(!editMode) ?
                <div>
                    <span onClick={activateEditMode}>{status || "----"}</span>
                </div>
                :
                <div>
                    <input className={style.statusInput} autoFocus={true} onChange={onChangeStatus} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;