import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Home from "../pages/Home";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(149deg, rgba(38,73,122,1) 0%, rgba(13,60,139,1) 47%, rgba(55,221,255,1) 100%)",
    color: "white",
    paddingBottom: "3em",
  },
});

function App() {
  const appBackground = useStyles();

  return (
    <Router>
      <Grid
        className={appBackground.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Container width={1100}>
          <TopNavigation />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Grid>
    </Router>
  );
}

export default App;
