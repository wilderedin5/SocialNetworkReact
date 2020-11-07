import React from "react";
import { Card } from "antd";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Cards = ({ contacts }) => (
  <Container>
    {contacts.map(({ name, status, phone, email, description }) => (
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
    ))}
  </Container>
);
