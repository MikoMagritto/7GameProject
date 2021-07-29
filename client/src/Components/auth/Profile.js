import React, { Component } from "react";
import service from "./auth-service";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  logout = (event) => {
    axios.post("http://localhost:5000/auth/logout", {}).then((response) => {
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
    if(!this.props.user){
        return "loading";
    }
    return (
      // <Link to='/logout'>Se déconnecter</Link>

      <div className = "profile">
        <h1> Profile </h1>
        <div>
          <h3> Username </h3>
          <br />
          <span> {this.props.user.username} </span>
        </div>

        <div>
          <h3> Height </h3> <span> {this.props.user.height} </span>
        </div>
        <div>
          <h3> Age </h3> <span> {this.props.user.age} </span>
        </div>
        <div>
          <h3> email </h3> <span> {this.props.user.email} </span>
        </div>
        <div>
          <h3> Level </h3> <span> {this.props.user.level} </span>
        </div>
        <div>
          <h3> Profil Pic </h3> <img src={this.props.user.avatar} />
        </div>
        <div className="cta">
          <Link to="/">
            <button className="btn logout" onClick={this.logout}>
              Logout
            </button>
          </Link>
          <Link to="/games/add">
            <button className="btn add">
              Create a game
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
