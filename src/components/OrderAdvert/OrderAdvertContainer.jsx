import { connect } from "react-redux"
import OrderAdvert from "./OrderAdvert"
import { addAdvert, deleteAdvert } from "../../redux/adverts-reducer"

const mapStateToProps = (state) => ({
    adverts: state.adverts.advertising
})

export default connect(mapStateToProps,{addAdvert,deleteAdvert})(OrderAdvert)