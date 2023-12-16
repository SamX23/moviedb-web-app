import { lazy } from "react";
import Layout from "../components/layouts/Layout";
import NavigationBar from "../components/NavigationBar";
import BackToTop from "../components/BackToTop";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const CardContainer = lazy(() => import("../components/CardContainer"));

function Home() {
  return (
    <Layout>
      <TopNavigation />
      <NavigationBar />
      <CardContainer />
      <Footer />
      <BackToTop />
    </Layout>
  );
}

export default Home;
