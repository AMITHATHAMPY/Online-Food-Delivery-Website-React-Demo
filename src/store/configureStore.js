import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import createRootReducer from "./rootReducer";
import { middleware as reduxPackMiddleware } from "redux-pack";

export const history = createBrowserHistory();

const initialState = {};
let middleware = [routerMiddleware(history), thunk, reduxPackMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);
