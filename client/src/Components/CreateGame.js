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
    mood: "",
    numPlayers: "",
    levelGame: "",
    typeGame: "",
  };

  getFields = () => {
    axios.get("http://localhost:5000/fields").then((AllFieldsFromDb) => {
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
      .post(
        "http://localhost:5000/games/add",
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
        // this.props.updateUser(response);
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
        <form onSubmit={this.handleFormSubmit}>
          <label> Field </label>
          <select name="field" onChange={(e) => this.handleChange(e)}>
            {this.state.fields.map((field) => {
              return <option value={field._id}>{field.name}</option>;
            })}
          </select>

          {/* <input
            type="text"
            name="field"
            value={this.state.field}
            onChange={(e) => this.handleChange(e)}
          /> */}
          <label> Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Date </label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Hour </label>
          <input
            type="time"
            name="hour"
            value={this.state.hour}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Mood </label>
          <select
            name="mood"
            value={this.state.mood}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="Fun">Fun</option>
            <option value="Competitive">Competitif</option>
          </select>
          <label> NumPlayers </label>
          <input
            type="number"
            name="numPlayers"
            value={this.state.numPlayers}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Level </label>
          <select
            name="levelGame"
            value={this.state.levelGame}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="Débutant">Débutant</option>
            <option value="Amateur">Amateur</option>
            <option value="Confirmé">Confirmé</option>
            <option value="ProA">ProA</option>
            <option value="ProB">ProB</option>
          </select>
          <label> typeGame </label>
          <select
            name="typeGame"
            value={this.state.typeGame}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="1x1">1x1</option>
            <option value="2x2">2x2</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="5x5">5x5</option>
          </select>
          <button className="btn">Create a Game</button>
        </form>
      </div>
    );
  }
}
