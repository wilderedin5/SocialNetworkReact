import React from "react";
import { Card } from "antd";
import styled from "@emotion/styled";
import { Note } from "../common/type";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const Cards = ({ contacts, className }) => (
  <Container className={className}>
    {contacts.map(({ name, status, phone, email, description }, index) => (
      <Card key={index} title={name} bordered={true}>
        <Note label="Working position" value={status} />
        <Note label="Phone number" value={phone} />
        <Note label="Email" value={email} />
        <Note label="For questions" value={description} />
      </Card>
    ))}
  </Container>
);
