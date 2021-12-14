import React, { Component } from "react";
import { login } from "./auth-service";
// import axios from "axios";
// import { Link, Redirect } from "react-router-dom";
import "./Login.css";


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

    login(username, password)
    .then((response) => {
          // console.log(response);
          this.setState({ username: "", password: "" });
          this.props.updateUser(response);
          this.props.history.push("/auth");
        }).catch((err) => console.log(err));
    // axios
    //   .post(
    //     "http://localhost:5000/auth/login",
    //     {
    //       username: this.state.username,
    //       password: this.state.password,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ username: "", password: "" });
    //     this.props.updateUser(response);
    //     this.props.history.push("/auth");
    //   })
    //   .catch((err) => this.setState({ error: err.response.data.message }));
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
      <div className="loginPage">
        {/*<img src="https://res.cloudinary.com/dro81vxlb/image/upload/v1628698874/terr_cwpsq2.png" className="image"/>*/}
      <div className="login">
        <img src='https://res.cloudinary.com/dro81vxlb/image/upload/v1628768443/logo_vf_mwvddj.png' alt="" className="logo" />
    
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <h1>SIGN IN</h1>
          <p>
            <label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
            </label>
          </p>

          <p>
            <label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <p className="forgot">Forgot password</p>
            </label>
          </p>

          <button className="log" type="submit">Login</button>
          {/* <p>Don't have an account</p> */}
          <a href="/signup" className="log2" type="submit">Sign up</a>
        </form>
      </div>
      </div>
      
    );
  }
}
