import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./ListGame.css";

export default class ListGame extends Component {
  state = {
    games: [],
  };

  getGames = () => {
    axios
      .get(`${process.env.REACT_APP_APIURL || ""}/games`)
      .then((response) => {
        // console.log("games :", response);
        this.setState({ games: response.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getGames();
  }
  render() {
    return (
      <div>
        <ul className="ListGame">
          {this.state.games.map((game) => {
            return (
              <Link to={`/games/${game._id}`}>
                <li key={game._id}>
                <div>
                  <img src={game.field.img} />
                  {/* -------------------------- */}
                </div>
                <div>
                  <div>
                    <h1>
                      {game.field.name}
                    </h1>
                    <span>{game.field.longitude}</span>
                    <span>{game.field.lattitude}</span>
                  </div>
                  <div>
                    <span>
                      <Moment format="D MMM YYYY" withTitle>
                        {game.date}
                      </Moment>
                    </span>
                    <span>{game.hour}</span>
                  </div>
                  <div>
                    <span>
                      {game.players.length}/{game.numPlayers} joueurs
                    </span>
                  </div>
                  <div>
                    <span> {game.levelGame} </span>
                  </div>
                  <div>
                    <span>Mood Game : {game.mood} </span>
                  </div>
                  <div></div>
                  <div>
                    <span> Game creator : {game.organisator.username} </span>
                  </div>
                </div>
              </li></Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
