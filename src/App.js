import React from "react";
import "./styles.css";

import { HashRouter, Switch, Route } from "react-router-dom";
import Routes from "./router";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          {Routes.map((item, index) => {
            console.log(item);
            return (
              <Route
                path={item.path}
                component={item.component}
                exact={item.exact || false}
              />
            );
          })}
        </Switch>
      </div>
    </HashRouter>
  );
}
