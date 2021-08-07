import React, { Component } from "react";
import service from "./auth-service";
import axios from "axios";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import "./Profile.css";

export default class Profile extends Component {
  state = {
    games: [],
    gamesOrga: []
  };
  componentDidMount() {
    this.listPlayerGame();
    this.listOrganisatorGame();
  }
  // componentDidUpdate(){
  //   this.props.updateUser();
  // }
  logout = (event) => {
    axios.post(`${process.env.REACT_APP_APIURL || ""}/auth/logout`, {}).then((response) => {
      this.props.updateUser(false);
    });
  };

  listPlayerGame = () => {
    axios.get(`${process.env.REACT_APP_APIURL || ""}/games`).then((response) => {
      let copyGames = [...response.data];
      copyGames.filter((e) => e.players.includes(this.props.userInSession._id));
      this.setState({ games: copyGames });
    });
  };

  listOrganisatorGame = () => {
    axios.get(`${process.env.REACT_APP_APIURL || ""}/games`).then((response) => {
      let copyGames = [...response.data];
      copyGames.filter((e) => e.organisator === this.props.userInSession.id);
      this.setState({ gamesOrga: copyGames });
    });
  };

  render() {
    // console.log("games", this.state.games);

    if (!this.props.userInSession) {
      return "loading";
    }
    return (
      // <Link to='/logout'>Se déconnecter</Link>
      <div className="profile">
        <div className="section1"> Hello {this.props.userInSession.username} ! </div>
        <div className="section2">
          <UserCard userInSession={this.props.userInSession} />
        </div>
        <div className="cta">
          <Link to="/">
            <button className="btn logout" onClick={this.logout}>
              Logout
            </button>
          </Link>
          <Link to="/games/add">
            <button className="btn add">Create a game</button>
          </Link>
          <Link to="/auth/edit">
            <button className="btn add">Modifier son profil</button>
          </Link>
        </div>
      </div>
    );
  }
}
