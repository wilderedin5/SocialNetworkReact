import React from 'react';
import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name={"dialogsMessageText"} />
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