import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckPage from "./Components/CheckPage";
import FingersPage from "./Components/FingerPage";
import Navbar from "./Components/Navbar";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/check" component={CheckPage} />
        <Route path="/" component={FingersPage} />
      </Switch>
    </Router>
  );
}

export default App;
