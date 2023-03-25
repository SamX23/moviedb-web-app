import ReactDOM from "react-dom/client";
import App from "./components/App";
import Head from "./components/Helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Head
    title="Movie DB Apps | Sami Kalammallah"
    desc="A simple movie DB apps created by Sami Kalammallah using React."
  >
    <App />
  </Head>
);
