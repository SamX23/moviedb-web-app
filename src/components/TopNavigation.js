import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  icons: {
    marginLeft: ".2em",
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
    padding: "10px",
    marginRight: ".2em",
  },
});

function TopNavigation() {
  const header = useStyles();

  return (
    <Grid
      className={header.root}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid className={header.icons} item>
        <IconButton className={header.icon}>
          <HomeIcon />
          <p>Home</p>
        </IconButton>
        <IconButton className={header.icon}>
          <FlashOnIcon />
          <p>Trending</p>
        </IconButton>
        <IconButton className={header.icon}>
          <PersonOutlineIcon />
          <p>Account</p>
        </IconButton>
        <IconButton className={header.icon}>
          <SearchIcon />
          <p>Search</p>
        </IconButton>
      </Grid>
      <Grid className={header.logo} item>
        <h1>Movie DB</h1>
      </Grid>
    </Grid>
  );
}

export default TopNavigation;
