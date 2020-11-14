import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer";
import { Info } from "./Info";
import Form from "./Form";

const Container = styled.div`
  color: #000;
`;

const OrderAdvert = ({ addAdvert, adverts, deleteAdvert }) => {
  const handleSubmit = ({ title, text, image }) => {
    addAdvert(adverts.length + 1, false, 0, title, text, image);
  };
  return (
    <Container>
      {adverts.map((advert) => (
        <Info key={advert.id} deleteAdvert={deleteAdvert} {...advert} />
      ))}
      <Form onSubmit={handleSubmit} />
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
