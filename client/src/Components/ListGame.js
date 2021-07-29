import axios from "axios";
import React, { Component } from "react";

export default class ListGame extends Component {
  state = {
    games: [],
  };
  
  getGames = () => {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        console.log("games :", response);
        this.setState({ games: response });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getGames();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.games.map((game) => {
            return (
              <li key={game._id}>
                <h1>
                  <Link to={`/games/${game._id}`}>{game.name}</Link>
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
