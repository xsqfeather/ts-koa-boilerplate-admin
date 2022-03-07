import * as React from "react";
import { Route } from "react-router-dom";
import Configuration from "./configuration/Configuration";
import Segments from "./resources/segments/Segments";

export default [
  <Route
    exact
    path="/configuration"
    render={(): React.ReactElement => <Configuration />}
  />,
  <Route
    exact
    path="/segments"
    render={(): React.ReactElement => <Segments />}
  />,
];
