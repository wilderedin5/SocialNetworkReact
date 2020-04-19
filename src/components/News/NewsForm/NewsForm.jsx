import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLength, requiredField } from '../../../utils/validate/validateForm';
import createFormElement from '../../../hoc/createFormElement/createFormElement';
import style from './NewsForm.module.css';

const maxLength1000 = maxLength(1000);
const maxLength100 = maxLength(100);
const Input = createFormElement("input");
const Textarea = createFormElement("textarea");

const NewsForm = (props) => {
    return(
        <form className={style.newsForm} onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder="Текст новости" name="newsText" component={Textarea} type="text" validate={[maxLength1000,requiredField]} />
            </div>
            <div>
                <Field placeholder="Автор" name="author" component={Input} type="text" validate={[maxLength100,requiredField]} />
            </div>
            <div>
                <Field placeholder="Категория" name="category" component={Input} type="text" validate={[maxLength100,requiredField]} />
            </div>
            <div>
                <button className={style.NewsFormBtn}>Добавить новость</button>
            </div>
            <div>
                {props.error ? props.error : null}
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'NewsForm'
  })(NewsForm)