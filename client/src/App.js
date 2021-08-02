import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/auth/Signup";
import { loggedin } from "./Components/auth/auth-service";
import { Switch, Route } from "react-router";
import LoginUser from "./Components/auth/Login";
import NavBar from "./Components/NavBar";
import Profile from "./Components/auth/Profile";
import Home from "./Components/auth/Home";
import Concept from "./Components/auth/Concept";
import CreateGame from "./Components/CreateGame"
import ListGame from "./Components/ListGame";

class App extends Component {
  state = {
    user: null,
    field: [],
  };

  addTheUser = (response) => {
    console.log("user logged is :", response);
    this.setState({ user: response });
    if (this.state.user === null) {
      loggedin()
        .then((response) => {
          this.setState({ user: response });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ user: false });
        });
    }
  };

  updateUser = (data) => {
    this.setState({ user: data });
  };

  componentDidMount() {
    this.addTheUser();
  }

  render() {
    return (
      <div className="App">
        <NavBar userInSession={this.state.user} />

        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <Signup addUser={this.addTheUser} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginUser updateUser={this.addTheUser} history={props.history} />
            )}
          />

          <Route
            exact
            path="/auth"
            render={(props) => (
              <Profile updateUser={this.addTheUser} user={this.state.user} />
            )}
          />

          {/* <Route
            exact
            path="/games/add"
            render={() => <CreateGame field={this.state.field} />}
          /> */}
          <Route
            exact
            path="/games/add"
            component={CreateGame}
          />
          <Route exact path="/games" render={(props)=> (
            <ListGame updateUser={this.addTheUser} user={this.state.user}/>
          )} />

          <Route exact path="/" component={Home} />
          <Route exact path="/concept" component={Concept} />
        </Switch>
      </div>
    );
  }
}

export default App;
