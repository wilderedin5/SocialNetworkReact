import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { manageAdvert } from "../../redux/adverts-reducer";
import { Advert } from "./advert";
import Form from "./form";

const OrderAdvert = ({ manageAdvert, adverts }) => {
  const handleSubmit = ({ title, text, img }) => {
    const id = adverts.length + 1;
    manageAdvert(id, {
      id,
      liked: false,
      likeCount: 0,
      title,
      text,
      img,
      comments: [],
    });
  };

  return (
    <div>
      {adverts.map(({ id, ...advert }) => (
        <Advert key={id} onDelete={() => manageAdvert(id)} {...advert} />
      ))}
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  adverts: state.adverts.adverts,
});

export default compose(
  connect(mapStateToProps, { manageAdvert }),
  withAuthRedirect
)(OrderAdvert);
