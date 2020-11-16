import NavigationBar from "./NavigationBar";
import Grid from "@material-ui/core/Grid";
import CardContainer from "./CardContainer";

function Body() {
  return (
    <Grid container>
      <NavigationBar />
      <CardContainer />
    </Grid>
  );
}

export default Body;
