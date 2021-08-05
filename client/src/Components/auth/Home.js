import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { signup } from './auth-service';
import { login } from './auth-service';
import "./Home.css";


class Login extends React.Component {
  state = { email: '', password: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state
    login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" });
        this.props.updateUser(response)
        console.log(this.props.currentUser)
      })
      .catch(err => console.log(err))
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='home'>
        <div className='section1'>
          <div className="text">
            <h1 className="orange">FIND</h1>
            <h1 className="orange">BASKETBALL COURT</h1>
            <h1>& GET INTO THE GAME</h1>
            <h2 className="orange">JOIN OUR COMMUNITY</h2>
          </div>
          <a href="/login">GET STARTED</a>
        </div>
      </div>

    )
  }
}
export default Login