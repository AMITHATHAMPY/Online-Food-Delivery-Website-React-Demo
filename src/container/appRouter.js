import React from "react";
import { Route, Switch } from "react-router";
import AppShell from "../components/appBar";
import HomePage from "../screens/home/index";
import appUrls from "../config/appUrls";
import MenuList from "../screens/menuList"

const Routing = () => {
    return (
        <Switch>
            <AppShell>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path={appUrls.HOME} component={HomePage} />
            <Route path={`${appUrls.RESTAURANT}/:restaurantId`} component={MenuList} />
            </Switch>
            </AppShell>
        </Switch>
    );
};
export default Routing;
