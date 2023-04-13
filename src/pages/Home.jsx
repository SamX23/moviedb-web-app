import { lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import Loading from "../components/Loading";
import NavigationBar from "../components/NavigationBar";
import BackToTop from "../components/BackToTop";

const CardContainer = lazy(() => import("../components/CardContainer"));

function Home() {
  return (
    <Grid container>
      <NavigationBar />
      <Suspense fallback={<Loading />}>
        <CardContainer />
      </Suspense>
      <BackToTop />
    </Grid>
  );
}

export default Home;
