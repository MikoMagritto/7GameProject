import React, { Component } from "react";
import axios from "axios";
import "../Components/CreateGame.css";

export default class CreateGame extends Component {
  state = {
    fields: [],
    field: "",
    name: "",
    date: "",
    hour: "",
    mood: "Fun",
    numPlayers: "",
    levelGame: "Débutant",
    typeGame: "",
  };

  getFields = () => {
    axios.get(`${process.env.REACT_APP_APIURL || ""}/fields`).then((AllFieldsFromDb) => {
      // console.log("AllfieldsReact : ", AllFieldsFromDb.data);
      this.setState({
        fields: AllFieldsFromDb.data,
      });
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // const field = this.state.field;
    // const name = this.state.name;
    // const date = this.state.date;
    // const hour = this.state.hour;
    // const mood = this.state.mood;
    // const numPlayers = this.state.numPlayers;
    // const level = this.state.levelGame;
    // const typeGame = this.state.typeGame;

    axios
      .post(`${process.env.REACT_APP_APIURL || ""}/games/add`,
        {
          field: this.state.field,
          name: this.state.name,
          date: this.state.date,
          hour: this.state.hour,
          mood: this.state.mood,
          numPlayers: this.state.numPlayers,
          levelGame: this.state.levelGame,
          typeGame: this.state.typeGame,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          field: "",
          name: "",
          date: "",
          hour: "",
          mood: "",
          numPlayers: "",
          levelGame: "",
          typeGame: "",
        });
        this.props.history.push("/auth");
      })
      .catch((err) => console.log(err));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.getFields();
  }
  render() {
    return (
      <div class="item">
        <div >
          <form onSubmit={this.handleFormSubmit} className="formCG">
            <div className="inputFormCG">
              <label> Field </label>
              <select name="field" onChange={(e) => this.handleChange(e)}>
                <option value="">Choose field</option>;
                {this.state.fields.map((field) => {
                  return <option value={field._id}>{field.name}</option>;
                })}
              </select>
            </div>
            <div className="inputFormCG">
              <label> Name </label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="inputFormCG">
              <label> Date </label>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="inputFormCG">
              <label> Hour </label>
              <input
                type="time"
                name="hour"
                value={this.state.hour}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="inputFormCG">
              <label> Mood </label>
              <select
                name="mood"
                value={this.state.mood}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="Fun">Fun</option>
                <option value="Competitive">Competitif</option>
              </select>
            </div>
            <div className="inputFormCG">
              <label> NumPlayers </label>
              <input
                type="number"
                name="numPlayers"
                value={this.state.numPlayers}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="levelTypeGame">
              <select
                name="levelGame"
                value={this.state.levelGame}
                onChange={(e) => this.handleChange(e)}
                placeholder="TypeGame"
              >
                <option value="Débutant">Débutant</option>
                <option value="Amateur">Amateur</option>
                <option value="Confirmé">Confirmé</option>
                <option value="ProA">ProA</option>
                <option value="ProB">ProB</option>
              </select>
              <select
                name="typeGame"
                value={this.state.typeGame}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Which match</option>
                <option value="1x1">1x1</option>
                <option value="2x2">2x2</option>
                <option value="3x3">3x3</option>
                <option value="4x4">4x4</option>
                <option value="5x5">5x5</option>
              </select>
            </div>
            <div className="inputFormCG">
              <button className="btnCreateGame">Create a Game</button>
            </div>
          </form>
        </div>
        <div className="imgCreateGame">
          <img src='https://res.cloudinary.com/la-chaussette-sale/image/upload/v1628796219/Rectangle_124_qlxnrn.png' />
        </div>

      </div>
    );
  }
}
