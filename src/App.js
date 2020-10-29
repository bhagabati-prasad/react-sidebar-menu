import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
// import { SidebarData } from "./components/SidebarData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Analytics,
  Dashboard,
  Friends,
  Home,
  Images,
  Mailbox,
} from "./components/PartialPages";

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mailbox' component={Mailbox} />
          <Route exact path='/analytics' component={Analytics} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/friends' component={Friends} />
          <Route exact path='/images' component={Images} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
