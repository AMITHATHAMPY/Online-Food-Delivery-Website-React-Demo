import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import styles from "./style";

import { useTheme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";

import { setSelectedRestaurant } from "../../data/action";
import DishItems from "../../components/dishItem";

function TabPanel(props) {
  const { value, index, categoryList, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <DishItems dishes={categoryList} />}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function MenuList(props) {
  const classes = styles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    props.setSelectedRestaurant(props.match.params.restaurantId);
  }, [props.restaurantList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className={classes.appBar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs example"
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          selected={true}
          className={classes.tabs}
        >
          {props.selectedRestuarant?.table_menu_list?.map((table, i) => {
            return (
              <Tab
                key={i}
                classes={{
                  root: classes.tabs,
                  labelIcon: classes.menuLabel,
                }}
                label={table.menu_category}
                {...a11yProps(i)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {props.selectedRestuarant?.table_menu_list?.map((table, i) => {
          return (
            <TabPanel
              key={i}
              value={value}
              index={i}
              dir={theme.direction}
              categoryList={table.category_dishes}
            />
          );
        })}
      </SwipeableViews>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedRestuarant: state.reducer.selectedRestuarant,
    restaurantList: state.reducer.restaurantList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedRestaurant: (id) => dispatch(setSelectedRestaurant(id)),
  };
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
);
