import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {maxLength,requiredField} from '../../../utils/validate/validateForm';
import createFormElement from '../../../hoc/createFormElement/createFormElement';

const maxLength250 = maxLength(250);
const Textarea = createFormElement("textarea");

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ Textarea } name={"dialogsMessageText"} type="text" validate={[maxLength250,requiredField]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}

export default reduxForm({
    // a unique name for the form
    form: 'DialogsForm'
})(DialogsForm)