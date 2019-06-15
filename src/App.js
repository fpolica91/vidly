import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./common/NavBar";
import Movies from "./components/movies";
import Customers from "./components/Customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";


class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <div className="content" />
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" exact component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notFound" component={NotFound} />
          <Redirect to="notFound" />
        </Switch>
      </main>
    );
  }
}

export default App;
