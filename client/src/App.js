import React, { Component } from 'react';
import './App.css';
import Signup from "./Components/auth/Signup";
import { loggedin } from "./Components/auth/auth-service";
import { Switch, Route } from 'react-router';


class App extends Component {
  state = {
    user: null,
  }

  addTheUser = (response) => {
    console.log('newuser is :', response);
    this.setState({ user: response })
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
  }

  // componentDidMount(){
  //   this.addTheUser();
  // }

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/signup"
        render = {(props)=>(
        <Signup addUser={this.addTheUser} />)}
        />

        </Switch>
        
        
      </div>
    );
  }

}

export default App;
