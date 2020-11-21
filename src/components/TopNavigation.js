import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

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
      <Grid className={header.icons}>
        <IconButton className={header.icon}></IconButton>
        <Button component={Link} to="/profile" className={header.icon}>
          <PersonOutlineIcon />
          <h2>Account</h2>
        </Button>
        <IconButton className={header.icon}>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid className={header.logo}>
        <Button component={Link} to="/" className={header.icon}>
          <HomeIcon />
          <h2> Movie DB</h2>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopNavigation;
