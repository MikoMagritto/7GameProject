import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/auth/Signup";
import { loggedin } from "./Components/auth/auth-service";
import { Switch, Route } from "react-router";
import LoginUser from "./Components/auth/Login";
import NavBar from "./Components/NavBar";
import Profile from "./Components/auth/Profile";

class App extends Component {
  state = {
    user: null,
  };

  addTheUser = (response) => {
    console.log("user logged is :", response);
    this.setState({ user: response });
    // if(this.state.user === null) {
    //   loggedin()
    //   .then(response => {
    //     this.setState({user:response})
    //   })
    //   .catch(err=> {
    //     console.log(err);
    //     this.setState({user:false})
    //   })
    // }
  };

  updateUser = (data) => {
    this.setState({ user: data });
  };

  // componentDidMount(){
  //   this.addTheUser();
  // }

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
        </Switch>
      </div>
    );
  }
}

export default App;
