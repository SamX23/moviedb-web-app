/* eslint-disable react/no-array-index-key */
import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { styled } from "@material-ui/core/styles";
import SearchContext from "../context";
import { MOVIE_GENRE } from "../constants/genre";

const GridContainer = styled(Grid)({
  margin: "1rem 0",
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

function NavigationBar() {
  const { setMovieCategory, setSearchQuery } = useContext(SearchContext);

  const handleClick = (id = "") => {
    setSearchQuery("");
    setMovieCategory(id);
  };

  return (
    <GridContainer
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      id="back-to-top-anchor"
    >
      <GridItem onClick={handleClick}>
        <FlashOnIcon />
        Top Rated
      </GridItem>
      {MOVIE_GENRE.map((genre, key) => (
        <GridItem key={key} onClick={() => handleClick(genre.id)}>
          {genre.title}
        </GridItem>
      ))}
    </GridContainer>
  );
}

export default NavigationBar;
