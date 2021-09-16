import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tabs: {
    textTransform: "capitalize !important",
    textAlign: "left",
    minHeight: "30px !important",
  },
  appBar: {
    padding: "0px",
    marginTop: "-10px",
    height: "35px",
    boxShadow: "0 8px 4px -4px #EEEEEE",
  },
  menuLabel: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}));
export default styles;
