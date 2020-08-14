import React from "react";
import App from "../App";
import Authentication from "../Authentication";

const Root = () => (
  <div className="mt-2">
    <Authentication>
      <App />
    </Authentication>
  </div>
);

export default Root;
