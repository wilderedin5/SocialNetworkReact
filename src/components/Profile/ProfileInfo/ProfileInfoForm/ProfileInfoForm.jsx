import React from 'react';
import { reduxForm, Field } from 'redux-form';
import createFormElement from '../../../../hoc/createFormElement/createFormElement';
import { maxLength } from '../../../../utils/validate/validateForm';
import style from './../ProfileInfo.module.scss';

const maxLength200 = maxLength(200);
const Input = createFormElement("input");

const ProfileInfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div className={style.profileInfo}>
                    <div className={style.profileInfoName}>Мое имя: <Field name="fullName" placeholder="Имя" type="text" component={Input} validate={[maxLength200]} /></div>
                    <div>Ищу работу: <Field name="lookingForAJob" type="checkbox" component={Input} validate={[maxLength200]} /> </div>
                    <div>Мои навыки: <Field name="lookingForAJobDescription" placeholder="Мои навыки" type="text" component={Input} validate={[maxLength200]} /> </div>
                    <div>Обо мне: <Field name="aboutMe" placeholder="Обо мне" type="text" component={Input} validate={[maxLength200]} /></div>
                    <ul>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <Field name={"contacts." + key} key={key} placeholder={key} type="text" component={Input} validate={[maxLength200]} />
                        })}
                    </ul>
                </div>
                <button className={style.editModeBtn}>Сохранить страницу</button> 
            <div>
                {props.error ? props.error : null}
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'profileInfoForm'
})(ProfileInfoForm);