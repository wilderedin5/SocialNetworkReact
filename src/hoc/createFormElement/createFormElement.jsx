import React from 'react';
import { maxLength } from '../../utils/validate/validateForm';
import style from './createFormElement.module.scss';
import { Textarea as BaseTextarea, Input as BaseInput } from '../../components/common/shared/type'

export const createFormElement = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <Element {...input} {...props} className={hasError ? style.formError : ""} />
            {(hasError) ? <div className={style.textError}>{meta.error}</div> : null}
        </div>
    )
}

export const Textarea = createFormElement(BaseTextarea);
export const Input = createFormElement(BaseInput);

export const maxLength250 = maxLength(250);
export const maxLength60 = maxLength(60);
export const maxLength100 = maxLength(100);
export const maxLength1000 = maxLength(1000);