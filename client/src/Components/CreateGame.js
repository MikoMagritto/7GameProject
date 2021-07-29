import React, { Component } from "react";
import axios from "axios";


export default class CreateGame extends Component {
  state = {
    fields: [],
    name: "",
    date: "",
    hour: "",
    mood: "",
    numPlayers: "",
    level: "",
    typeGame: "",
  };

  getFields = () => {
    axios.get("http://localhost:5000/fields").then((AllFieldsFromDb) => {
     console.log(AllFieldsFromDb);
      this.setState({
        fields: AllFieldsFromDb,
      });
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const field = this.state.field;
    const name = this.state.name;
    const date = this.state.date;
    const hour = this.state.hour;
    const mood = this.state.mood;
    const numPlayers = this.state.numPlayers;
    const level = this.state.level;
    const typeGame = this.state.typeGame;

    axios
      .post("http://localhost:5000/games/add", {
        field: this.state.field,
        name: this.state.name,
        date: this.state.date,
        hour: this.state.hour,
        mood: this.state.mood,
        numPlayers: this.state.numPlayers,
        level: this.state.level,
        typeGame: this.state.typeGame,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          field: "",
          name: "",
          date: "",
          hour: "",
          mood: "",
          numPlayers: "",
          level: "",
          typeGame: "",
        });
        // this.props.updateUser(response);
        // this.props.history.push('/auth');
      })
      .catch((err) => this.setState({ error: err.response.data.message }));
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount(){
    this.getFields();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label> Field </label>
          <div>
              {/* {this.state.fields.map(field =>{
                  return(
                      <p>
                        {field.name}
                      </p>
                  )
              })} */}
              {/* {this.state.fields[0].name} */}
          </div>

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
            name="Mood"
            value={this.state.level}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="Fun">Fun</option>
            <option value="Competitif">Competitif</option>
          </select>
          <label> NumPlayers </label>
          <input
            type="number"
            name="numPlayers"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Level </label>
          <select
            name="level"
            value={this.state.level}
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
