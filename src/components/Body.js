import { useState } from "react";
import requests from "../constants/requests";
import NavigationBar from "./NavigationBar";
import Grid from "@material-ui/core/Grid";
import CardContainer from "./CardContainer";

function Body() {
  const [filter, setFilter] = useState(requests.fetchTrending);
  return (
    <Grid container>
      <NavigationBar setFilter={setFilter} />
      <CardContainer filter={filter} />
    </Grid>
  );
}

export default Body;
