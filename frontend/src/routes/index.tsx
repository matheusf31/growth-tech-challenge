import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "../pages/Users";
import Posts from "../pages/Posts";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/user/:id/posts" exact component={Posts} />
  </Switch>
);

export default Routes;
