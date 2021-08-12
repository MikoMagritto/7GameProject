import axios from "axios";
import React, { Component } from "react";
import { uploadFile } from "./auth-service";
import { Link } from "react-router-dom";

export default class EditProfile extends Component {
  state = {
    username: this.props.userInSession.username,
    email: this.props.userInSession.email,
    height: this.props.userInSession.height,
    age: this.props.userInSession.age,
    level: this.props.userInSession.level,
    avatar: this.props.userInSession.avatar,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, email, height, age, level, avatar } = this.state;
    const id = this.props.userInSession._id;

    axios
      .put(`${process.env.REACT_APP_APIURL || ""}/auth/edit/${id}`,
        {
          username,
          email,
          height,
          age,
          level,
          avatar,
        },
        { withCredentials: true }
      )
      .then((response) => {
        // console.log("response", response);
        this.props.updateUser(response.data);
        this.props.history.push("/auth");
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   deleteProfile = (e) => {
  //     e.preventDefault();
  //     const id = this.props.userInSession._id;

  //     axios.get(`http://localhost:5000/auth/delete/${id}`)
  //     .then(() => {
  //         console.log("utilisateur delete")
  //       this.props.history.push("/");
  //     });
  //   };

  fileChange = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("avatar", e.target.files[0]);

    uploadFile(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ avatar: response.avatar });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <p>
            <label>
              <em>Username</em>{" "}
            </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </p>
          <p>
            <label>
              <em>Email</em>{" "}
            </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
          </p>
          <p>
            <label>
              <em>Height</em>{" "}
            </label>
            <input
              type="number"
              name="height"
              value={this.state.height}
              onChange={(e) => this.handleChange(e)}
            />
          </p>

          <p>
            <label>
              <em>Age</em>{" "}
            </label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={(e) => this.handleChange(e)}
            />
          </p>

          <p>
            <label>
              <em>Level</em>{" "}
            </label>
            <select
              name="level"
              value={this.state.level}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Débutant">Débutant</option>
              <option value="Amateur">Amateur</option>
              <option value="Confirmé">Confirmé</option>
              <option value="ProA">ProA</option>
              <option value="ProB">ProB</option>
            </select>
          </p>

          <p>
            <label>
              <em>Avatar</em>{" "}
            </label>
            <input type="file" onChange={(e) => this.fileChange(e)} />
          </p>
          <button>Change</button>

          {/* <button onClick={(e) => this.deleteProfile(e)}>
              Delete my profile
            </button> */}
        </form>
      </div>
    );
  }
}
