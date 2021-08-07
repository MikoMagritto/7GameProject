import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../Components/Contact.css";



export default class Contact extends React.Component {
  state = {
    name:"",
    email:"",
    sujet:"",
    message:"",
  };

handleFormSubmit = (event) => {
  event.preventDefault();
  const name = this.state.name;
  const email = this.state.email;
  const sujet = this.state.sujet;
  const message = this.state.message;
}

handleChange = (event) => {
  const { name, email, sujet, message, value } = event.target;
  this.setState({
    [name]: value,
    [email]: value,
    [sujet]: value,
    [message]: value,

  })
}
  render() {
    return (
      <div className="formulaire">
      <h1>CONTACT US</h1>
      <hr></hr>
      <p>Une remarque? Une suggestion ?
      <br></br>
      N'hésitez pas nous écrire</p>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.error && (
            <p className="error">
              {this.state.error}
            </p>)}

          <p>
            <label>
              <em>Name</em>
              <br></br>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </label>
          </p>

          <p>
            <label>
              <em>Email</em>
              <br></br>
              <input type="text" name="email" value={this.state.email} onChange={(e) =>this.handleChange(e)} />
            </label>
          </p>

          <p>
            <label>
              <em>Sujet</em>
              <br></br>
              <input type="text" name="sujet" value={this.state.sujet} onChange={(e) =>this.handleChange(e)} />
            </label>
          </p>
          
.
          <hr className="vertical"></hr>


          <p>
            <label>
              <em>Message</em>
              <br></br>
              <input type="textarea" name="message" value={this.state.message} onChange={(e) =>this.handleChange(e)} />
            </label>
          </p>
          <button>SEND MESSAGE</button>
          </form>
          </div>

    )
  }
}