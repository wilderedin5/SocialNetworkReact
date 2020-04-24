import React from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from './ProfileStatus/ProfileStatusWithHook';
import Contact from './Contact/Contact';
import ProfileInfoForm from './ProfileInfoForm/ProfileInfoForm';
import { useState } from 'react';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader />
    }
    const onSubmit = (formData) => {
        props.updateProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }
    const onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }
    return (
            <div className={style.profileDesc}>
                <div className={style.profileAvatar}>
                    <img src={props.profile.photos.large} />
                    {props.isOwner ? <div>
                        <input type="file" id="photoFile" onChange={onChangePhoto} className={style.uploadPhoto} />
                        <label for="photoFile">Изменить аватарку</label>
                    </div> : ''}
                </div>
                {editMode ?
                    <ProfileInfoForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
                    :
                    <div className={style.profileInfo}>
                        <div className={style.profileInfoName}>{props.profile.fullName}</div>
                        <div className={style.profileInfoStatus}><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></div>
                        <div>Ищу работу: {props.profile.lookingForAJob ? "Да" : "Нет"} </div>
                        <div>Мои навыки: {props.profile.lookingForAJobDescription} </div>
                        <div>Обо мне: {props.profile.aboutMe}</div>
                        <ul>
                            {Object.keys(props.profile.contacts).map(key => {
                                return <Contact key={key} contactName={key} contactValue={props.profile.contacts[key]} />
                            })}
                        </ul>
                    </div>
                }
                {(props.isOwner && !editMode) &&
                    <button className={style.editModeBtn} onClick={() => setEditMode(true)}>Редактировать страницу</button>
                }
            </div>
    );
}

export default ProfileInfo;