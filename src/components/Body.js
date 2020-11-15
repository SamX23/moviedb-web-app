import VideoCard from "./VideoCard";
import NavigationBar from "./NavigationBar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

function Body() {
  return (
    <Grid container>
      <NavigationBar />
      <VideoCard movie={null} />
    </Grid>
  );
}

export default Body;
