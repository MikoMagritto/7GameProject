import React, { Component } from 'react';
import {signup} from './auth-service';

import { Link } from 'react-router-dom';

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    height:"",
    age:"",
    level:"",
    avatar:"",
    role:"",
  }

handleFormSubmit = (event) => {
  event.preventDefault();
  const username = this.state.username;
  const password = this.state.password;
  const email = this.state.email;
  const height = this.state.height;
  const age = this.state.age;
  const level = this.state.level;
  const avatar = this.state.avatar;
  const role = this.state.role;


  signup(username, password,email,height,age,level,avatar,role)
    .then(response => {
      this.setState({username: "", password: "",email: "",height: "", age: "",level: "",avatar: "",role: "",});
    })
    .catch(error => console.log(error))
}
render() {    
  return (      
  <div>
    <h1>Sign up</h1>
    <form onSubmit={this.handleSubmit}>
      {this.state.error && (              
      <p className="error">
        {this.state.error}
      </p>
                  )}        
      <p>
        <label>
          <em>Username</em>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          <em>Password</em>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          <em>email</em>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
      </p>
      render() {    return (      
  <div>
    <h1>Sign up</h1>
    <form onSubmit={this.handleSubmit}>
                  {this.state.error && (              
      <p className="error">
        {this.state.error}
      </p>
                  )}        
      <p>
        <label>
          <em>Username</em>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          <em>Password</em>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          <em>Email</em>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          <em>Height</em>
          <input type="number" name="height" value={this.state.height} onChange={this.handleChange} />
        </label>
      </p>

      <p>
        <label>
          <em>Age</em>
          <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
        </label>
      </p>

      <p>
        <label>
          <em>Leval</em>
          <select name="level" value={this.state.level} onChange={(e) => this.handleChange(e)}>
            <option value="Débutant"></option>
            <option value="Amateur"></option>
            <option value="Confirmé"></option>
            <option value="ProA"></option>
            <option value="ProB"></option>
          </select>
         
        </label>
      </p>

      <p>
        <label>
          <em>Avatar</em>
          <input type="file" name="avatar" value={this.state.avatar} onChange={this.handleChange} />
        </label>
      </p>
      
    </form>
    </div>
    )}}

