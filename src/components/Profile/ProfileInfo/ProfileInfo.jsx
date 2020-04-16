import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from './ProfileStatus/ProfileStatusWithHook';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    const onChangePhoto = (e) => {
        if(e.target.files.length){
            props.updatePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={style.profileImg}>
                <img src="https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg" />
            </div>
            <div className={style.profileDesc}>
                <div className={style.profileAvatar}>
                    <img src={props.profile.photos.large} />
                    {props.isOwner ? <input type="file" onChange={onChangePhoto} /> : ''}
                </div>
                <div className={style.profileInfo}>
                    <div className={style.profileInfoName}>{props.profile.fullName}</div>
                    <div className={style.profileInfoStatus}><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></div>
                    <ul>
                        <li>Обо мне: {props.profile.aboutMe}</li>
                        <li>Twitter: {props.profile.contacts.twitter}</li>
                        <li>GIT: {props.profile.contacts.github}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>Ищу ли работу: {props.profile.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;