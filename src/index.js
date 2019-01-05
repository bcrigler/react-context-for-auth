import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";

import "./styles.css";

const App = () => (
  <div>
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
);

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
