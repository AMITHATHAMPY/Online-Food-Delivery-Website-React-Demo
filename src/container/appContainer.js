import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";

import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "../utils/theme/index";
import store, { history } from "../store/configureStore";
import SnackBar from "../components/snackbar/index";
import Routing from "./appRouter";

const AppContainer = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
        <SnackBar />
      </Provider>
    </MuiThemeProvider>
  );
};

export default AppContainer;
