import React from "react";
import { Collapse } from "antd";

export const Faq = ({ help }) => (
  <Collapse>
    {help.map(({ questionTitle, id, answer }) => (
      <Collapse.Panel header={questionTitle} key={id}>
        {answer}
      </Collapse.Panel>
    ))}
  </Collapse>
);
