import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, styled } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
    padding: "10px",
  },
  icons: {
    borderRadius: 0,
    color: "#9d9d9d",
  },
});

function TopNavigation() {
  const header = useStyles();

  return (
    <Grid
      className={header.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item className="header__icons" xs={9}>
        <IconButton className={header.icons}>
          <HomeIcon />
          <p>Home</p>
        </IconButton>
        <IconButton className={header.icons}>
          <FlashOnIcon />
          <p>Trending</p>
        </IconButton>
        <IconButton className={header.icons}>
          <PersonOutlineIcon />
          <p>Account</p>
        </IconButton>
        <IconButton className={header.icons}>
          <SearchIcon />
          <p>Search</p>
        </IconButton>
      </Grid>
      <Grid className="header__logo" item xs={3}>
        <h1>Movie DB</h1>
      </Grid>
    </Grid>
  );
}

export default TopNavigation;