import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Plans from "./components/Plans";
import BookTour from "./components/BookTour";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Membership from "./components/Membership";

import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/login" component={MembershipLogin}></Route>
      <Route exact path="/membership" component={MembershipView}></Route>
    </Switch>
  );
};

const Welcome = () => {
  return (
    <div>
      <Header />
      <Plans />
      <BookTour />
      <ContactUs />
    </div>
  );
};

const MembershipLogin = () => {
  return (
    <div>
      <Login />
      <ContactUs />
    </div>
  );
};

const MembershipView = () => {
  return (
    <div>
      <Membership />
      <ContactUs />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
