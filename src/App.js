import TopNavigation from "./components/TopNavigation";
import Body from "./components/Body";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(4,0,70,1) 0%, rgba(19,79,115,1) 49%, rgba(0,212,255,1) 100%)",
    color: "white",
  },
}));

function App() {
  const appBackground = useStyles();
  return (
    <Grid
      className={appBackground.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Header />
      <p>Hello!!</p>
      <Body />
      <Footer />
    </Grid>
  );
}

export default App;
