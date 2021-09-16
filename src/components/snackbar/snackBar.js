import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SnackbarMaterialUI from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import classNames from "classnames";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";

const styles = (theme) => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: blue[800],
  },
  warning: {
    backgroundColor: amber[700],
  },
});

class Snackbar extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.showSnackbar)
      setTimeout(() => {
        this.props.hideSnackbar();
      }, 4000);
  }

  render() {
    const { classes, className } = this.props;
    return (
      <SnackbarMaterialUI
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={this.props.showSnackbar}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={classNames(classes[this.props.snackbarVariant], className)}
          message={this.props.snackbarMessage}
        />
      </SnackbarMaterialUI>
    );
  }
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snackbar);
