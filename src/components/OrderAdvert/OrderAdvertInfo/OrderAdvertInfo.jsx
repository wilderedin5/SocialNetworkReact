import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgb(45, 80, 165);
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: #000;
`;

const OrderAdvertInfo = ({ title, text, id, deleteAdvert }) => (
  <Container>
    <div>
      <b>Title:</b> {title}
    </div>
    <div>
      <b>Text advert:</b> {text}
    </div>
    <Button onClick={() => deleteAdvert(id)}>Remove advert</Button>
  </Container>
);

export default OrderAdvertInfo;
