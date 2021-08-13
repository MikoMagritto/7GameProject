import React, { Component } from "react";
import service from "./auth-service";
import axios from "axios";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import "./Profile.css";
//import "./ProfileCSSGame.css"
import UserInfo from "./UserInfo";
import Moment from "react-moment";
import Chat from "./Chat";
import Calendar from "./Calendar";
import NextGame from "./NextGame";
import Favoris from "./Favoris";


export default class Profile extends Component {
  state = {
    games: [],
    gamesOrga: [],
  };
  componentDidMount() {
    this.listPlayerGame();
  }

  logout = (event) => {
    axios
      .post(`${process.env.REACT_APP_APIURL || ""}/auth/logout`, {})
      .then((response) => {
        this.props.updateUser(false);
      });
  };

  listPlayerGame = () => {
    axios
      .get(`${process.env.REACT_APP_APIURL || ""}/games`)
      .then((response) => {
        let copyGames = response.data.filter((e) =>
          e.players.includes(this.props.userInSession._id)
        );
        // console.log("playersGame", copyGames);
        let organisatorGame = response.data.filter(
          (e) => e.organisator._id === this.props.userInSession._id
        );
        console.log("organisatorGame", organisatorGame);
        this.setState({ games: copyGames, gamesOrga: organisatorGame });
      });
  };

  deleteGame = (id) => {
    axios
      .delete(`${process.env.REACT_APP_APIURL || ""}/games/delete/${id}`, { withCredentials: true })
      .then(() => {
        let copyGamesOrga = [...this.state.gamesOrga]
        let indexGame = copyGamesOrga.indexOf(id);
        copyGamesOrga.splice(indexGame, 1);
        this.setState({ gamesOrga: copyGamesOrga })
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log("games", this.state.games);
    // console.log("UserSession", this.props.userInSession);
    if (!this.props.userInSession) {
      return "loading";
    }
    return (
      // <Link to='/logout'>Se déconnecter</Link>
      <div className="profile">
        <div className="section1">
          <h1> Hello {this.props.userInSession.username} !</h1>
        </div>
        <div className="section2">
          <UserCard userInSession={this.props.userInSession} />
          <UserInfo userInSession={this.props.userInSession} />
          <Chat />
        </div>
        <div className="section3">
          <Calendar />
          <Favoris />
        </div>
        <div>
          <div>
            <div>
              <h2 className="NextGameST">Next games to play</h2>
              <div className="ulGames">
                {this.state.games.map((game) => {
                  return (
                    <div className="profileGame">
                      <h2>{game.name}</h2>
                      <div className="infoProfileGame">
                        <div>
                          <Moment format="D MMM YYYY" withTitle>
                            {game.date}
                          </Moment>
                        </div>
                        <div>{game.hour}</div>
                        <div>{game.field.name}</div>
                        <div className="usernameOrga">By {game.organisator.username}</div>
                      </div>
                      <Link to={`/games/${game._id}`}>
                        <button>Detail Game</button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="MyGames">My Games</h2>
              <div className="ulGames">
                {this.state.gamesOrga.map((game) => {
                  return (
                    <div className="profileGameOrga">
                      <h2>{game.name}</h2>
                      <div className="infoProfileGameOrga">
                        <div>
                          <Moment format="D MMM YYYY" withTitle>
                            {game.date}
                          </Moment>
                        </div>
                        <div>{game.hour}</div>
                        <div>{game.field.name}</div>
                        <div> By {game.organisator.username}</div>
                        <div className="btnDetailDelete">
                          <Link to={`/games/${game._id}`}>
                            <button>Detail Game</button>
                          </Link>
                          <button onClick={() => this.deleteGame(game._id)}>Delete game</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="buttCreateLogout">
              <Link to="/">
                <button className="btnlogout" onClick={this.logout}>
                  Logout
            </button>
              </Link>
              <Link to="/games/add">
                <button className="btnadd">Create a game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
