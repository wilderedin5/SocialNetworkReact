import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer";
import { OrderAdvertInfo } from "./order-advert-info";
import OrderAdvertForm from "./order-advert-form";

const Container = styled.div`
  color: #000;
`

const OrderAdvert = ({ addAdvert, adverts, deleteAdvert }) => {
  const onSubmit = ({ title, text, image }) => {
    addAdvert(
      adverts.length + 1,
      false,
      0,
      title,
      text,
      image
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

const mapStateToProps = (state) => ({
  adverts: state.adverts.advertising,
});

export default compose(
  connect(mapStateToProps, { addAdvert, deleteAdvert }),
  withAuthRedirect
)(OrderAdvert);
