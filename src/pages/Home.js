import { useState } from "react";
import requests from "../constants/requests";
import NavigationBar from "../components/NavigationBar";
import CardContainer from "../components/CardContainer";
import Grid from "@material-ui/core/Grid";

function Home() {
  const [filter, setFilter] = useState(requests.fetchTrending);
  return (
    <Grid container>
      <NavigationBar setFilter={setFilter} />
      <CardContainer filter={filter} />
    </Grid>
  );
}

export default Home;
