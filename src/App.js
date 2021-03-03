import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./screens/Homepage";


import "./scss/all.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}

        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">
            <Homepage />
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
