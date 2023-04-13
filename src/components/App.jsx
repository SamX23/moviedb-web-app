import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TopNavigation from "./TopNavigation";
import Home from "../pages/Home";
import Footer from "./Footer";
import SearchContext from "../context";
import { TYPE } from "../constants/tmdb";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(149deg, rgba(38,73,122,1) 0%, rgba(13,60,139,1) 47%, rgba(55,221,255,1) 100%)",
    color: "white",
    paddingBottom: "3rem",
    fontFamily: "sans-serif",
  },
});

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieCategory, setMovieCategory] = useState(TYPE.movie.popular);

  const appBackground = useStyles();

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, movieCategory, setMovieCategory }}
    >
      <Router>
        <Box className={appBackground.root}>
          <Container width={1100}>
            <TopNavigation />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Container>
        </Box>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
