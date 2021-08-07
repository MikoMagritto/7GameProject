import React, { Component } from "react";
import service from "./auth-service";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    games: [],
    gamesOrga:[]
  };
  componentDidMount() {
    this.listPlayerGame();
    this.listOrganisatorGame();
  }
  // componentDidUpdate(){
  //   this.props.updateUser();
  // }
  logout = (event) => {
    axios.post("http://localhost:5000/auth/logout", {}).then((response) => {
      this.props.updateUser(false);
    });
  };

  listPlayerGame = () => {
    axios.get("http://localhost:5000/games").then((response) => {
      let copyGames = [...response.data];
      copyGames.filter((e) => e.players.includes(this.props.userInSession._id));
      this.setState({ games: copyGames });
    });
  };

  listOrganisatorGame = () => {
    axios.get("http://localhost:5000/games").then((response) => {
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
        <div>
          {this.state.games.map((game) => {
            return (
              <div>
                <h2>{game.name}</h2>
                <div>{game.date}</div>
                <div>{game.hour}</div>
                <div>{game.field.name}</div>
                <div>{game.organisator.username}</div>
              </div>
            );
          })}
            {this.state.gamesOrga.map((game) => {
            return (
              <div>
                <h2>{game.name}</h2>
                <div>{game.date}</div>
                <div>{game.hour}</div>
                <div>{game.field.name}</div>
                <div>{game.organisator.username}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
