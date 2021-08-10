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
              <Link to={`/games/${game._id}`} className="link">
                <li key={game._id}>
                  <div className="buttonCard">
                    <img src={game.field.img} />
                    <button>See more</button>
                  </div>

                  <div className="containerText">
                    <div className="middle"></div>
                    <div class="fieldHourdate">
                      <div className="field">
                        <h3>{game.field.name}</h3>
                        <span>{game.field.longitude}</span>
                        <span>{game.field.lattitude}</span>
                      </div>
                      <div className="HourDate">
                        <span className="date">
                          <Moment format="D MMM YYYY" withTitle>
                            {game.date}
                          </Moment>
                        </span>
                        <span>{game.hour}</span>
                      </div>
                    </div>
                    <div className="GameOrganisator">
                      <div className="Game">
                        <span>Level {game.levelGame}</span>
                        <span>Mood {game.mood}</span>
                        <span className="players">
                          {game.players.length} / {game.numPlayers}{" "}
                          <span className="playersTypo">players</span>
                        </span>
                      </div>

                      <div className="organisator">
                        <span> By {game.organisator.username} </span>
                        <img src={game.organisator.avatar} />
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
