import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  img: {
    height: 355,
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));
export default styles;
