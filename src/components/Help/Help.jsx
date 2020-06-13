import React from 'react';
import { Collapse } from 'antd';
import style from './Help.module.scss';
import Contact from './Contact/Contact';

const Help = (props) => {
    return (
        <div>
            <Collapse>
                {
                    props.help.map(help => <Collapse.Panel header={help.questionTitle} key={help.id}>
                        <p>{help.answer}</p>
                    </Collapse.Panel>)
                }
            </Collapse>
            <div className={style.wrapperCard}>
                {
                    props.contacts.map(contact => <Contact {...contact} />)
                }
            </div>
        </div>
    )
}

export default Help;