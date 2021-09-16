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
      padding: "0px",
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
  addIconButton: {
    borderTopLeftRadius: "30px !important",
    borderBottomLeftRadius: "30px !important",
    padding: "0px !important",
    border: "none !important",
  },
  removeIconButton: {
    borderTopRightRadius: "30px !important",
    borderBottomRightRadius: "30px !important",
    padding: "0px !important",
  },
  button: {
    padding: "0px !important",
    border: "none !important",
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
    width: "10px",
    height: "10px",
  },
  buttonGrid: {
    paddingLeft: theme.spacing(3),
    height: "30px !important",
  },
  customizationText: {
    fontWeight: "medium",
    fontSize: "14px",
    letterSpacing: "normal",
    margin: theme.spacing(1, 0, 1.3, 3),
  },
}));
export default styles;
