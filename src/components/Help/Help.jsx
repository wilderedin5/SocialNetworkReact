import React from 'react';
import { Collapse } from 'antd';

const Help = (props) => {
    return (
        <Collapse>
            {
                props.help.map(help => <Collapse.Panel header={help.questionTitle} key={help.id}>
                    <p>{help.answer}</p>
                </Collapse.Panel>)
            }
        </Collapse>
    )
}

export default Help;