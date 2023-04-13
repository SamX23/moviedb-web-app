import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  icon: {
    borderRadius: 0,
    color: "white",
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  },
  logo: {
    textAlign: "center",
    marginRight: ".2em",
  },
  search: {
    position: "relative",
    marginLeft: ".2em",
    marginTop: "1.2em",
    borderRadius: 999,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function TopNavigation() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <SearchBar />
      </Grid>
      <Grid className={classes.logo}>
        <Button component={Link} to="/" className={classes.icon}>
          <HomeIcon style={{ marginRight: ".5rem" }} />
          <h2>Movie DB</h2>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopNavigation;
