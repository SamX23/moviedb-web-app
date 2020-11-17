import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { styled } from "@material-ui/core/styles";

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
    transform: "scale(1.1)",
  },
});

function NavigationBar() {
  return (
    <GridContainer
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <GridItem>Trending</GridItem>
      <GridItem>Top Rated</GridItem>
      <GridItem>Action</GridItem>
      <GridItem>Comedy</GridItem>
      <GridItem>Horror</GridItem>
      <GridItem>Romance</GridItem>
      <GridItem>Mystery</GridItem>
    </GridContainer>
  );
}

export default NavigationBar;
