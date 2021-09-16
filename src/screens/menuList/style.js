import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tabs: {
    textTransform: "capitalize",
    textAlign: "left",
    minHeight: "30px",
  },
  appBar: {
    padding: 0,
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
