import React from "react";
import Authentication from "../Authentication";
import App from "../App";

const Root = () => (
  <Authentication>
    <App />
  </Authentication>
);

export default Root;
