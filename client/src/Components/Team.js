import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../Components/Team.css";

export default class Team extends React.Component {
  render() {
    return(
      <div className="team">
      <h1>Team</h1>
      <article>
        <h2> Walid Blila</h2>
        <p>Trainee</p>
        <img src="client\public\images\Junior.png" alt=""></img>
      </article>

      <article>
        <h3>Chloe Toussain</h3>
        <p>Developer manager</p>
        <img src="client\public\images\Alex.png" alt=""></img>
      </article>

      <article>
        <h4>Michel Hardy aka Mark</h4>
        <p>Developer junior</p>
        <img src="client\public\images\Kevin.png" alt=""></img>
      </article>


      </div>
    )

  }
}