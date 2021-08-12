import React, { Component } from "react";
import axios from "axios";
import Moment from 'react-moment';
import "./DetailGame.css";

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
      .get(`${process.env.REACT_APP_APIURL || ""}/games/${params.id}`, {
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
          <div className="parent">
            <div className="partie1">
              <img src={this.state.game.field.img} />
            </div>
            {/* <div>
              <h1>Name</h1>
              <span> {this.state.game.name}</span>
            </div> */}
            <div className="partie2">
              <div className="FieldDataEtBtn">
                <div className="FieldData">
                  <div>
                    <h1>{this.state.game.field.name}</h1>
                  </div>

                  <div>
                    <h1><Moment format="D MMM YYYY" withTitle>{this.state.game.date}</Moment></h1>
                  </div>

                  <div>
                    <h1>{this.state.game.hour} hour</h1>
                  </div>
                </div>
                <div className="btnJoin"> {this.state.game.players.filter(
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
                      Play that game
                    </button>
                  )}</div>
              </div>

              <div className="gameData">
                <div className="whiteBlock">
                  <div>
                    <h1>{this.state.game.players.length}/{this.state.game.numPlayers} players</h1>
                    <span className="listPlayers">
                      {this.state.game.players.map((player) =>
                        <div className="playerName">
                          <img src='https://res.cloudinary.com/la-chaussette-sale/image/upload/v1628773275/basketball-player_3_gfw88d.png' />
                          <span>{player.username}</span>
                        </div>
                      )}
                    </span>
                  </div>
                  <div>
                    <h3> Mood</h3>
                    <span>{this.state.game.mood}</span>
                  </div>

                  <div>
                    <h3>Level Game</h3>
                    <span>{this.state.game.levelGame}</span>
                  </div>

                  <div>
                    <h3>Type of Game</h3>
                    <span>{this.state.game.typeGame}</span>
                  </div>
                </div>


              </div>

            </div>
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
