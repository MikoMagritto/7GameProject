import React, { Component } from "react";
import login from "./auth-service";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class LoginUser extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  // componentDidMount() {
  //   axios.post('http://localhost:5000/auth/login', { username: this.state.username, password: this.state.password })
  //     .then(response => response.data)
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    //login(username, password)
    axios
      .post(
        "http://localhost:5000/auth/login",
        {
          username: this.state.username,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        this.setState({ username: "", password: "" });
        this.props.updateUser(response);
        this.props.history.push("/auth");
      })
      .catch((err) => this.setState({ error: err.response.data.message }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   authService.login(this.state.username, this.state.password)
  //     .then(response => {
  //       this.setState({error: ""});

  //       this.props.updateUser(response);
  //       this.props.history.push('/');
  //     })
  //     .catch(err => this.setState({error: err.response.data.message}))
  //   ;
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}

          <p>
            <label>
              <em>Username</em>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
          </p>

          <p>
            <label>
              <em>Password</em>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <button>Se connecter</button>
        </form>
      </div>
    );
  }
}
