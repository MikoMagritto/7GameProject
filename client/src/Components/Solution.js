import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../Components/Solution.css";

export default class Solution extends React.Component {
  render() {
  return (
    <div className="solution">
      <h1>Our Solution</h1>
      <article>
        <h2>Find</h2>
        <img src ="client\public\images\ballon.jpg" alt=""></img>
         <p> Are you looking for a player ? 
          Seven Game will geolocate the playgrounds and the players around you.</p>
          </article>

      <article>
        <h3>Play</h3>
          <img src="client\public\images\geoloc.png" alt=""></img>
            <p>Match a player of your rank. 
          Challenge your opponent and become the MVP of the Parisian playgrounds !</p>
        </article>
   
    </div>
   
  )
  }
}