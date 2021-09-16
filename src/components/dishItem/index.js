import React from "react";
import { connect } from "react-redux";
import styles from "./style";

import {
  Paper,
  Typography,
  ButtonGroup,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import { setCartCount } from "../../data/action";
import DishTypes from "../../config/dishType";

function DishItems(props) {
  const classes = styles();

  const handleSetToCart = (isAdd, id) => {
    props.setCartCount(isAdd, id);
  };

  return (
    <Grid container spacing={0} className={classes.mainGrid}>
      {props.dishes.map((dish, i) => {
        return (
          <Grid item lg={4} md={6} sm={12} className={classes.cardGrid} key={i}>
            <Paper elevation={1} className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={1}>
                  <IconButton
                    color={
                      dish.dish_Type === DishTypes.veg ? "primary" : "secondary"
                    }
                    className={classes.iconButton}
                  >
                    <RadioButtonCheckedIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.dishName}>
                    {dish.dish_name}
                  </Typography>
                  <Grid>
                    <span className={classes.dishPrice}>
                      {dish.dish_currency + " " + dish.dish_price}
                    </span>
                    <span className={classes.dishCalory}>
                      {dish.dish_calories + " " + "Calories"}
                    </span>
                    <br></br>
                    <Typography className={classes.dishDescription}>
                      {dish.dish_description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2} className={classes.imageGrid}>
                  <img
                    className={classes.img}
                    src={dish.dish_image}
                    alt="imag"
                  />
                </Grid>
              </Grid>
              <ButtonGroup
                disableElevation
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
                className={classes.buttonGrid}
                disabled={!dish.dish_Availability}
              >
                <Button
                  variant="contained"
                  elevation={0}
                  classes={{ root: classes.addIconButton }}
                  onClick={() => handleSetToCart(true, dish.dish_id)}
                >
                  <AddIcon />
                </Button>
                <Button
                  elevation={0}
                  variant="contained"
                  className={classes.button}
                >
                  {dish.selectedCount}
                </Button>
                <Button
                  elevation={0}
                  variant="contained"
                  className={classes.removeIconButton}
                  onClick={
                    dish.selectedCount
                      ? () => handleSetToCart(false, dish.dish_id)
                      : null
                  }
                >
                  <RemoveIcon />
                </Button>
              </ButtonGroup>
              {dish.addonCat.length && dish.dish_Availability ? (
                <Typography
                  color="secondary"
                  className={classes.customizationText}
                >
                  Customizations available
                </Typography>
              ) : null}
              {!dish.dish_Availability ? (
                <Typography
                  color="secondary"
                  className={classes.customizationText}
                >
                  Dish is not available
                </Typography>
              ) : null}
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setCartCount: (isAdd, id) => dispatch(setCartCount(isAdd, id)),
  };
}
export default connect(null, mapDispatchToProps)(DishItems);
