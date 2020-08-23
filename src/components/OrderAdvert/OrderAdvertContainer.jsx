import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer";
import OrderAdvert from "./OrderAdvert";

const mapStateToProps = (state) => ({
  adverts: state.adverts.advertising,
});

export default compose(
  connect(mapStateToProps, { addAdvert, deleteAdvert }),
  withAuthRedirect
)(OrderAdvert);
