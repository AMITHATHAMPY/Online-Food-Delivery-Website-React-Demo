import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import snackbar from "../components/snackbar/data/reducer";
import reducer from "../data/reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    snackbar,
    reducer,
  });
