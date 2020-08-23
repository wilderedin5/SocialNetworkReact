import React from "react";
import styled from "@emotion/styled";
import { Card as BaseCard } from "antd";

const Card = styled(BaseCard)`
  width: 32%;
  margin-bottom: 20px;
`;

const Contact = ({ name, status, phone, email, description }) => (
  <Card title={name} bordered={true}>
    <div>
      <b>Working position:</b> {status}
    </div>
    <div>
      <b>Phone number:</b> {phone}
    </div>
    <div>
      <b>Email:</b> {email}
    </div>
    <div>
      <b>For questions:</b> {description}
    </div>
  </Card>
);

export default Contact;
