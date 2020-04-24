import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {maxLength,requiredField} from '../../../../utils/validate/validateForm';
import createFormElement from '../../../../hoc/createFormElement/createFormElement';

const maxLength250 = maxLength(250);
const Textarea = createFormElement("textarea");

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"postText"} placeholder="Эта стена ждет твоего поста!" validate={[requiredField,maxLength250]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}

export default reduxForm({
    // a unique name for the form
    form: 'MyPosts'
})(MyPostsForm)