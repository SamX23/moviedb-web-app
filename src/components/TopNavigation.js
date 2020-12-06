import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";

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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function TopNavigation() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
      <Grid className={classes.logo}>
        <Button component={Link} to="/" className={classes.icon}>
          <HomeIcon />
          <h2> Movie DB</h2>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopNavigation;
