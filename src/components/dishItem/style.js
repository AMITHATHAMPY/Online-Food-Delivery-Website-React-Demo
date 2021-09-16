import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  cardGrid: {
    width: "-webkit-fill-available",
  },
  paper: {
    minHeight: "150px",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    "@media screen and (max-width: 480px)": {
      margin: theme.spacing(0),
      borderBottom: "1px solid #CCCCCC",
      borderRadius: 0,
      boxShadow: "none",
      minHeight: "unset",
    },
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    borderRadius: "20px",
    boxShadow: "2px 2px 2px 1px #E7E9EB",
  },
  mainGrid: {
    padding: theme.spacing(3, 8, 2, 8),
    "@media screen and (max-width: 480px)": {
      padding: 0,
    },
  },
  img: {
    width: "60px",
    height: "60px",
  },
  imageGrid: {
    textAlign: "right",
    paddingRight: theme.spacing(0.2),
  },
  buttonGroup: {
    borderRadius: "100px",
    height: "30px",
    padding: 0,
  },
  dishName: {
    fontWeight: "bold",
    fontSize: "14px",
    letterSpacing: "normal",
    margin: theme.spacing(0, 0, 0.3, 0),
  },
  dishDescription: {
    fontWeight: "medium",
    fontSize: "12px",
    letterSpacing: "normal",
    margin: theme.spacing(0, 0, 1.3, 0),
  },
  dishPrice: {
    fontWeight: "bold",
    fontSize: "12px",
    letterSpacing: "normal",
    float: "left",
    fontFamily: "Roboto, sans-serif",
  },
  dishCalory: {
    fontWeight: "bold",
    fontSize: "12px",
    letterSpacing: "normal",
    float: "right",
    fontFamily: "Roboto, sans-serif",
  },
  iconButton: {
    padding: theme.spacing(0),
    width: 10,
    height: 10,
  },
  buttonGrid: {
    paddingLeft: theme.spacing(3),
  },
  customizationText: {
    fontWeight: "medium",
    fontSize: "14px",
    letterSpacing: "normal",
    margin: theme.spacing(1, 0, 1.3, 3),
  },
}));
export default styles;
