import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/company" component={Company} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
};

export default Routes;
