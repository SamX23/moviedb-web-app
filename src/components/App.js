import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Body from "./Body";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(90deg, rgba(4,0,70,1) 0%, rgba(19,79,115,1) 49%, rgba(0,212,255,1) 100%)",
    color: "white",
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
        spacing={3}
      >
        <Container width={1100}>
          <TopNavigation />
          <Switch>
            <Route path="/">
              <Body />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Grid>
    </Router>
  );
}

export default App;
