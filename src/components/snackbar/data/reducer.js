import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./constants";

const initialState = {
  showSnackbar: false,
  snackbarMessage: "",
  snackbarVariant: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        showSnackbar: true,
        snackbarMessage: action.data.snackbarMessage,
        snackbarVariant: action.data.snackbarVariant,
      };
    case HIDE_SNACKBAR:
      return {
        ...state,
        showSnackbar: false,
        snackbarMessage: "",
      };
    default:
      return state;
  }
}
