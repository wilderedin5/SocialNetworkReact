import React from "react";
import styled from "@emotion/styled";
import { OrderAdvertInfo } from "./order-advert-info";
import OrderAdvertForm from "./order-advert-form";

const Container = styled.div`
  color: #000;
`

export const OrderAdvert = ({ addAdvert, adverts, deleteAdvert }) => {
  const onSubmit = (formData) => {
    addAdvert(
      adverts.length + 1,
      false,
      0,
      formData.title,
      formData.text,
      formData.image
    );
  };
  return (
    <Container>
      {adverts.map((advert) => (
        <OrderAdvertInfo deleteAdvert={deleteAdvert} {...advert} />
      ))}
      <OrderAdvertForm onSubmit={onSubmit} />
    </Container>
  );
};