import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import requests from "../constants/requests";

const GridContainer = styled(Grid)({
  paddingTop: "1em",
  paddingBottom: "1em",
  marginBottom: ".5em",
});

const GridItem = styled(Button)({
  color: "white",
  opacity: 0.7,
  transition: "transform 50ms ease-out",
  "&:hover": {
    opacity: 1,
    fontWeight: 600,
  },
});

function NavigationBar({ setFilter }) {
  return (
    <GridContainer
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      id="back-to-top-anchor"
    >
      <GridItem onClick={() => setFilter(requests.fetchTrending)}>
        <FlashOnIcon />
        Trending
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchTopRated)}>
        Top Rated
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchAction)}>
        Action
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchComedy)}>
        Comedy
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchHorror)}>
        Horror
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchRomance)}>
        Romance
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchMystery)}>
        Mystery
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchSciFi)}>Sci-fi</GridItem>
      <GridItem onClick={() => setFilter(requests.fetchWestern)}>
        Western
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchAnimation)}>
        Animation
      </GridItem>
      <GridItem onClick={() => setFilter(requests.fetchTV)}>TV</GridItem>
    </GridContainer>
  );
}

NavigationBar.propTypes = {
  setFilter: PropTypes.func,
};

export default NavigationBar;
