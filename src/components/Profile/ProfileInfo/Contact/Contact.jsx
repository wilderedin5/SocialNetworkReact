import React from 'react';

const Contact = ({ contactName, contactValue }) => {
    return (
        <li>{contactName}: {contactValue}</li>
    )
}

export default Contact;