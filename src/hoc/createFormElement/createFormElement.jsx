import React from 'react';
import style from './createFormElement.module.css';

const createFormElement = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <Element {...input} {...props} className={hasError ? style.formError : ""} />
            {(hasError) ? <div className={style.textError}>{meta.error}</div> : null}
        </div>
    )
}

export default createFormElement;