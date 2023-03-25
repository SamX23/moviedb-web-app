import { useState, lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import requests from "../constants/requests";
import Loading from "../components/Loading";
import NavigationBar from "../components/NavigationBar";
import BackToTop from "../components/BackToTop";

const CardContainer = lazy(() => import("../components/CardContainer"));

function Home() {
  const [filter, setFilter] = useState(requests.fetchPopular);

  return (
    <Grid container>
      <NavigationBar setFilter={setFilter} />
      <Suspense fallback={<Loading />}>
        <CardContainer filter={filter} />
      </Suspense>
      <BackToTop />
    </Grid>
  );
}

export default Home;
