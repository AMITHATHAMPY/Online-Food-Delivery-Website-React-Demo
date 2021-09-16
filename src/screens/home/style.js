import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1, 8, 2, 8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 2, 2, 2),
    },
  },
  centerDiv: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  gridContainer: {
    marginTop: theme.spacing(0.5),
  },
  title: {
    fontWeight: "bold",
    fontSize: "28px",
    fontFamily: "Work Sans, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  card: {
    borderRadius: "20px",
    boxShadow: "3px 3px 3px 2px #E7E9EB",
  },
  cardGrid: {
    width: "-webkit-fill-available",
  },
  media: {
    height: 120,
    borderTopRadius: "15px",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "normal",
  },
  favoriteIcon: {
    float: "right",
  },
  ratingDiv: {
    marginTop: theme.spacing(0.7),
    marginBottom: theme.spacing(0.7),
  },
  chip: {
    height: "20px",
    backgroundColor: "#edf8ee",
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
}));
export default styles;
