import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name={"postText"} />
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