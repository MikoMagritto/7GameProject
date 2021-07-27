import React, { Component } from "react";
import service from "./auth-service";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  logout = (event) => {
    axios.post('http://localhost:5000/auth/logout', {})
    .then((response) => {
      this.props.updateUser(false);
    });
  };

//   handleUpload = (event) => {
//     let formData = new FormData();
//     formData.append("photo", event.target.files[0]);

//     service.upload(formData).then((response) => {
//       this.props.updateUser(response);
//     });
//   };

  render() {
    return (
      // <Link to='/logout'>Se déconnecter</Link>

      <div>
        <h1> Profile </h1>
        <p>
          <h3> Username </h3>
          <br />
          <span> {this.props.user.data.username} </span>
        </p>
        <p>
          <h3> Height </h3> <span> {this.props.user.data.height} </span>
        </p>
        <p>
          <h3> Age </h3> <span> {this.props.user.data.age} </span>
        </p>
        <p>
          <h3> email </h3> <span> {this.props.user.data.email} </span>
        </p>
        <p>
          <h3> Level </h3> <span> {this.props.user.data.level} </span>
        </p>
        <p>
          <h3> Profil Pic </h3> <img src={this.props.user.data.avatar} />
        </p>
        <div className="cta">
          <Link to='/'>
            <button className="btn logout" onClick={this.logout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
