import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../Components/Contact.css";


export default class Contact extends React.Component {
  state = {
    name:"",
    email:"",
    message:"",
  };

handleFormSubmit = (event) => {
  event.preventDefault();
  const name = this.state.name;
  const email = this.state.email;
  const message = this.state.message;
}

handleChange = (event) => {
  const { name, email, message, value } = event.target;
  this.setState({
    [name]: value,
    [email]: value,
    [message]: value,

  })
}
  render() {
    return (
      <div>
      <h1>Contact Us</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.error && (
            <p className="error">
              {this.state.error}
            </p>)}

          <p>
            <label>
              <em>Name</em>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </label>
          </p>

          <p>
            <label>
              <em>Email</em>
              <input type="text" name="email" value={this.state.name} onChange={(e) =>this.handleChange(e)} />
            </label>
          </p>

          <p>
            <label>
              <em>Message</em>
              <input type="text" name="message" value={this.state.message} onChange={(e) =>this.handleChange(e)} />
            </label>
          </p>
          <button>Send Message</button>
          </form>
          </div>

    )
  }
}