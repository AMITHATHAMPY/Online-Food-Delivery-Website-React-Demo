import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./style";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { setRestaurants, resetProps } from "../../data/action";
import { snackbarActions } from "../snackbar/data/action";
import appUrls from "../../config/appUrls";

function AppShell(props) {
  const classes = styles();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((response) => {
        props.setRestaurants(response.data);
        snackbarActions.showSnackbar(
          "Something went wrong. Please try after some time",
          "error"
        );
      })
      .catch((error) => {
        snackbarActions.showSnackbar(
          "Something went wrong. Please try after some time",
          "error"
        );
      });
  }, []);

  const handleBack = () => {
    props.navigateTo(appUrls.HOME);
    props.resetProps();
  };

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static" elevation={0} color="inherit">
          <Toolbar disableGutters={true}>
            {props.isRestaurantSelected ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleBack}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : null}
            <Typography
              variant="inherit"
              color="primary"
              className={
                props.isRestaurantSelected
                  ? classes.restaurantName
                  : classes.title
              }
            >
              {props.isRestaurantSelected
                ? props.selectedRestuarant.restaurant_name
                : "Hello Chef"}
            </Typography>
            <div className={classes.grow} />
            <div>
              <IconButton
                aria-label="show 17 new notifications"
                color="primary"
              >
                <Badge
                  badgeContent={props.itemsCount}
                  color="primary"
                  classes={{
                    root: classes.badge,
                  }}
                >
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
              {!props.isRestaurantSelected ? (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {props.children}
    </>
  );
}

function mapStateToProps(state) {
  return {
    isRestaurantSelected: state.reducer.isRestaurantSelected,
    selectedRestuarant: state.reducer.selectedRestuarant,
    itemsCount: state.reducer.itemsCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setRestaurants: (id) => dispatch(setRestaurants(id)),
    navigateTo: (url) => dispatch(push(url)),
    resetProps: () => dispatch(resetProps()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
