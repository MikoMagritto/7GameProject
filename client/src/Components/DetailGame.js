import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment';

export default class DetailGame extends Component {
  state = {
    game: "",
  };
  componentDidMount() {
    this.getGame();
    // this.addPlayer();
  }
  getGame = () => {
    const params = this.props.match.params;
    // console.log(params);
    axios
      .get(`http://localhost:5000/games/${params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        // console.log("game :", response.data);
        this.setState({ game: response.data });
      })
      .catch((err) => console.log(err));
  };

  deletePlayer = (e) => {
    e.preventDefault();
    const params = this.props.match.params;
    const player = e.target.value;

    axios
      .put(`${process.env.REACT_APP_APIURL || ""}/games/${params.id}/outPlayer`, player, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ game: response.data });
        this.props.history.push("/games");
      })
      .catch((err) => console.log(err));
  };

  addPlayer = (e) => {
    e.preventDefault();
    const params = this.props.match.params;

    // console.log("onClickAddPlayer", e.target.value);

    const player = e.target.value;

    axios
      .put(`${process.env.REACT_APP_APIURL || ""}/games/${params.id}/listPlayer`, player, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ game: response.data });
        this.props.history.push("/games");
      })
      .catch((err) => console.log(err));
  };

  render() {
   
    if (!this.state.game) {
      return "loading";
    }
    return (
      <div className="detailgame">
        {this.props.userInSession ? (
          <div>
            <div>
              <h1>Detail of Match</h1>
              <img src={this.state.game.field.img} />
            </div>
            <div>
              <h1>Name</h1>
              <span> {this.state.game.name}</span>
            </div>

            <div>
              <h1>Field</h1>
              <span> {this.state.game.field.name}</span>
            </div>

            <div>
              <h1>Date</h1>
              <span><Moment format="D MMM YYYY" withTitle>{this.state.game.date}</Moment></span>
            </div>

            <div>
              <h1>Hour</h1>
              <span>{this.state.game.hour}</span>
            </div>

            <div>
              <h1>Mood</h1>
              <span>{this.state.game.mood}</span>
            </div>

            <div>
              <h1>numPlayers</h1>
              <span>{this.state.game.numPlayers}</span>
            </div>

            <div>
              <h1>Level Game</h1>
              <span>{this.state.game.levelGame}</span>
            </div>

            <div>
              <h1>Type of Game</h1>
              <span>{this.state.game.typeGame}</span>
            </div>

            <div>
              <h1>List of Players</h1>
              <span>
                {this.state.game.players.map((player) => player.username)}
              </span>
            </div>

            {this.state.game.players.filter(
              (el) => el._id === this.props.userInSession._id
            ).length > 0 ? (
              <button
                onClick={(e) => this.deletePlayer(e)}
                value={this.props.userInSession._id}
              >
                Se désinscrire
              </button>
            ) : (
              <button
                onClick={(e) => this.addPlayer(e)}
                value={this.props.userInSession._id}
              >
                Rejoindre
              </button>
            )}
            {/* {this.state.game.players.includes(this.props.userInSession) ? (
               <button
               onClick={(e) => this.deletePlayer(e)}
               value={this.props.userInSession._id}
             >
               Se désinscrire
             </button> 
            ) : ( <button
                onClick={(e) => this.addPlayer(e)}
                value={this.props.userInSession._id}
              >
                Rejoindre
              </button>)} */}

          </div>
        ) : (
          <div>Tu dois te connecter pour rejoindre ce match</div>
        )}
      </div>
    );
  }
}
