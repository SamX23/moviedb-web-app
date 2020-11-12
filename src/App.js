import Header from "./components/Header";
import Body from "./components/Body";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(89,89,255,1) 41%, rgba(1,184,236,1) 65%, rgba(159,239,255,1) 100%)",
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
      <Header item />
      <p>Hello!!</p>
      <Body item />
    </Grid>
  );
}

export default App;
