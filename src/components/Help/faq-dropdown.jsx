import React from "react";
import { Collapse } from "antd";

export const Faq = ({ help }) => (
    <Collapse>
        {help.map((help) => (
            <Collapse.Panel header={help.questionTitle} key={help.id}>
                {help.answer}
            </Collapse.Panel>
        ))}
    </Collapse>
)