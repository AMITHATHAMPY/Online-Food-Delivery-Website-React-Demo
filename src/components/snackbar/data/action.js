import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./constants";

export const snackbarActions = {
  showSnackbar,
  hideSnackbar,
};

function showSnackbar(snackbarMessage, snackbarVariant, redirectTo) {
  return {
    type: SHOW_SNACKBAR,
    data: { snackbarMessage, snackbarVariant, redirectTo },
  };
}
function hideSnackbar() {
  return { type: HIDE_SNACKBAR };
}
