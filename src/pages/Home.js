import React, { useState, Suspense } from "react";
import requests from "../constants/requests";
import Grid from "@material-ui/core/Grid";
import Loading from "../components/Loading";
import NavigationBar from "../components/NavigationBar";

const CardContainer = React.lazy(() => import("../components/CardContainer"));

function Home() {
  const [filter, setFilter] = useState(requests.fetchPopular);

  return (
    <Grid container>
      <NavigationBar setFilter={setFilter} />
      <Suspense fallback={<Loading />}>
        <CardContainer filter={filter} />
      </Suspense>
    </Grid>
  );
}

export default Home;
