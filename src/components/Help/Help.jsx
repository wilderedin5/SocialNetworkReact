import React from "react";
import styled from "@emotion/styled";
import { Collapse } from "antd";
import Contact from "./Contact/Contact";

const WrapperCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Help = ({ help, contacts }) => (
  <div>
    <Collapse>
      {help.map((help) => (
        <Collapse.Panel header={help.questionTitle} key={help.id}>
          {help.answer}
        </Collapse.Panel>
      ))}
    </Collapse>
    <WrapperCard>
      {contacts.map((contact) => (
        <Contact {...contact} />
      ))}
    </WrapperCard>
  </div>
);

export default Help;
