import { connect } from "react-redux"
import OrderAdvert from "./OrderAdvert"
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

const mapStateToProps = (state) => ({
    adverts: state.adverts.advertising
})

export default compose(
    connect(mapStateToProps,{addAdvert,deleteAdvert}),
    withAuthRedirect
)(OrderAdvert);