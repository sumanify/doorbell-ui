import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckPage from "./Components/CheckPage";
import FingersPage from "./Components/FingerPage";
import SuperVisePage from "./Components/SuperVisePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/supervise" component={SuperVisePage} />
        <Route exact path="/check" component={CheckPage} />
        <Route path="/" component={FingersPage} />
      </Switch>
    </Router>
  );
}

export default App;
