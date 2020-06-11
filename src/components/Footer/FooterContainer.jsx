import Footer from "./Footer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    copyright: state.footer.copyright
});

export default connect(mapStateToProps,{})(Footer)