import React from "react";
import OrderAdvertInfo from "./OrderAdvertInfo/OrderAdvertInfo";
import OrderAdvertForm from "./OrderAdvertForm/OrderAdvertForm";

const OrderAdvert = ({ addAdvert, adverts, deleteAdvert }) => {
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
    <div>
      {adverts.map((advert) => (
        <OrderAdvertInfo deleteAdvert={deleteAdvert} {...advert} />
      ))}
      <OrderAdvertForm onSubmit={onSubmit} />
    </div>
  );
};

export default OrderAdvert;
