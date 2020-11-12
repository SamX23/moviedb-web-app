import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, styled } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    padding: "10px",
  },
}));

const headerIcons = styled(IconButton());

function Header() {
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
        <IconButton>
          <HomeIcon />
          <p>Home</p>
        </IconButton>
        <IconButton>
          <FlashOnIcon />
          <p>Trending</p>
        </IconButton>
        <IconButton>
          <PersonOutlineIcon />
          <p>Account</p>
        </IconButton>
        <IconButton>
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

export default Header;
