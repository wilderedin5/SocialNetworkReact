import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer";
import { Advert } from "./Advert";
import Form from "./Form";

const OrderAdvert = ({ addAdvert, adverts, deleteAdvert }) => {
  const handleSubmit = ({ title, text, image }) => {
    addAdvert(adverts.length + 1, false, 0, title, text, image);
  };
  return (
    <div>
      {adverts.map(({ id, ...advert }) => (
        <Advert key={id} deleteAdvert={() => deleteAdvert(id)} {...advert} />
      ))}
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  adverts: state.adverts.adverts,
});

export default compose(
  connect(mapStateToProps, { addAdvert, deleteAdvert }),
  withAuthRedirect
)(OrderAdvert);
