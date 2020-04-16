import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from './ProfileStatus/ProfileStatusWithHook';
import Contact from './Contact/Contact';

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
                    <div>Ищу ли работу: {props.profile.lookingForAJobDescription}</div>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <ul>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <Contact key={key} contactName={ key } contactValue={ props.profile.contacts[key] } />
                            })}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;