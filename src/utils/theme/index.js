import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4BB050",
      main: "#4BB050",
      dark: "#4BB050",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff0000",
      main: "#ff0000",
      dark: "#ff0000",
      contrastText: "#4BB050",
    },
  },
  font: {
    fontFamily: "Zilla Slab",
    fontWeight: "Bold",
    fontFamilyRoboto: "Roboto",
  },
});

export default theme;
