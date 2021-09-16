import { connect } from "react-redux";
import SnackBar from "./snackBar";
import { snackbarActions } from "./data/action";

function mapStateToProps(state) {
  return {
    showSnackbar: state.snackbar.showSnackbar,
    snackbarMessage: state.snackbar.snackbarMessage,
    snackbarVariant: state.snackbar.snackbarVariant,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideSnackbar: () => dispatch(snackbarActions.hideSnackbar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
