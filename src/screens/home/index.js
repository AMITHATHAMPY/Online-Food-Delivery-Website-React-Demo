import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styles from "./style";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Chip,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Rating from "@material-ui/lab/Rating";

import HomeBanner from "../../components/carousel";
import appUrls from "../../config/appUrls";

function HomePage(props) {
  const classes = styles();
  const cuisine = ["American", "Italian", "Arabian"];

  const handleViewMore = (id) => {
    props.navigateTo(`${appUrls.RESTAURANT}/${id}`);
  };

  return (
    <>
      <div className={classes.container}>
        <HomeBanner />
        <div className={classes.centerDiv}>
          <>
            <Typography className={classes.title}>Top Restaurants</Typography>
            <Grid container spacing={3} className={classes.gridContainer}>
              {props.restaurantList.map((restaurant, i) => {
                return (
                  <Grid item md={3} sm={6} className={classes.cardGrid} key={i}>
                    <Card
                      className={classes.card}
                      elevation={0}
                      onClick={() => handleViewMore(restaurant.restaurant_id)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={restaurant.restaurant_image}
                        />
                        <CardContent>
                          <div>
                            <Typography className={classes.cardTitle}>
                              {restaurant.restaurant_name}
                            </Typography>
                            <FavoriteBorderIcon
                              className={classes.favoriteIcon}
                              color="primary"
                            />
                          </div>
                          <div className={classes.ratingDiv}>
                            <Rating
                              name="size-small"
                              defaultValue={4}
                              size="small"
                            />
                          </div>
                          <div>
                            {cuisine.map((cu, i) => {
                              return (
                                <Chip
                                  size="small"
                                  label={cu}
                                  className={classes.chip}
                                  color="primary"
                                  variant="outlined"
                                  key={i}
                                />
                              );
                            })}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    restaurantList: state.reducer.restaurantList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
