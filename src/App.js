import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PreLoader from "./PreLoader";
import Header from "./Header";
import Issuer from "./Issuer";
import About from "./About";
import Login from "./Login";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <PreLoader />
        <Header />
        <Switch>
          <Route exact path="/" component={Issuer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
