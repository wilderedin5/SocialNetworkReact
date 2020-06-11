import { connect } from "react-redux"
import OrderAdvert from "./OrderAdvert"
import { addAdvert } from "../../redux/adverts-reducer"

const mapStateToProps = (state) => ({
    adverts: state.adverts.advertising
})

export default connect(mapStateToProps,{addAdvert})(OrderAdvert)