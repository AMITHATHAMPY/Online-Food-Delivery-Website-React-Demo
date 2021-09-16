import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(1, 8, 0, 8),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1, 2, 0, 2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: "36px",
    fontFamily: theme.font.fontFamily,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  badge: {
    padding: theme.spacing(0.7),
  },
  restaurantName: {
    fontSize: "30px",
    fontFamily: theme.font.fontFamily,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
}));
export default styles;
