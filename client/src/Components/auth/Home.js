import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { signup } from './auth-service';
import { login } from './auth-service';

class Login extends React.Component{
  state = {email:'', password:''}
  handleSubmit = (event) =>{
    event.preventDefault();
    const {email,password} = this.state
    login(email,password)
    .then(response=>{
      this.setState({ email: "", password: "" });
      this.props.updateUser(response)
      console.log(this.props.currentUser)
    })
    .catch(err=>console.log(err))
  }
  handleChange = (event) =>{
    const {name, value}=event.target
    this.setState({[name]:value})
  }
  render(){
    return (
      <div>
      <h1>Seven Game</h1>
      <p>Join the fame !</p>
       <form onSubmit={this.handleSubmit}>
            <label> Username </label>
            <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
            <label> Password </label>
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
            <button>Login</button>
            <p>Don't have an account !</p>
            <Link to="/signup"><button className="btn">Sign up</button></Link>
          </form>
      </div>
    )
  }
}
export default Login