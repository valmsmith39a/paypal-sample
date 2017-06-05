import React from "react";
import { Switch, Route } from "react-router-dom";
import DelimInputDisplay from "./delimInputDisplay";
import ContactInfo from "./contactInfo";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={DelimInputDisplay} />
      <Route path="/contact" component={ContactInfo} />
    </Switch>
  </main>
);

export default Main;
