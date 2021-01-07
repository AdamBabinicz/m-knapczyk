import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Poetry from "./components/pages/Poetry";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pisarka" component={Services} />
          <Route path="/poetka" component={Poetry} />
          <Route path="/wydawca" component={Products} />
          <Route path="/blogerka" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
