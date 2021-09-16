import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import styles from "./style";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function HomeBanner(props) {
  const theme = useTheme();
  const classes = styles();
  const images = [
    "https://ultimastatus.com/wp-content/uploads/2021/06/food-quotes.jpg",
    "https://blog.bolt.eu/wp-content/uploads/2021/04/1200x628_best-lunch-ideas_article-header_bolt-food-1024x536.jpg",
    "https://blog.bolt.eu/wp-content/uploads/2021/04/1200x628_best-breakfast-ideas_header-image_bolt-food.jpg",
    "https://images.squarespace-cdn.com/content/v1/5dedf21b7c131a3015fd5ad5/1575948055123-VLZ49JEXIYF8QMAABP6F/DSC04905-43_web.jpg?format=1500w",
    "https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg",
  ];
  return (
    <>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          enableMouseEvents
        >
          {images.map((img, index) => (
            <div key={index}>
              <img className={classes.img} src={img} alt={index} />
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </>
  );
}

export default HomeBanner;
