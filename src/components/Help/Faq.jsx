import React from "react";
import { Collapse } from "antd";

export const Faq = ({ help }) => (
  <Collapse>
    {help.map(({ title, id, answer }) => (
      <Collapse.Panel header={title} key={id}>
        {answer}
      </Collapse.Panel>
    ))}
  </Collapse>
);
