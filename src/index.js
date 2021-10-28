import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Head from "./components/Helmet";

render(
  <Head
    title="Movie DB Apps | Sami Kalammallah"
    desc="A simple movie DB apps created by Sami Kalammallah using React."
  >
    <App />
  </Head>,
  document.getElementById("root")
);
