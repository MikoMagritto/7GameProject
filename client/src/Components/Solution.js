import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../Components/Solution.css";

export default class Solution extends React.Component {
  render() {
  return (
    <div className="solution">
      <center><h1>OUR SOLUTION</h1></center>
      <div className="art">
      <article className="art1">
        <h2>Find</h2>
        <img src ="client\public\Terrain2.png" alt=""></img>
         <p> Are you looking for a player ? </p>
         <br></br>
         <p>Seven Game will geolocate the playgrounds and the players around you.</p>
          </article>
          <br></br>

      <article className="art2">
        <h3>Play</h3>
          <img src="client\public\ballon.png" alt=""></img>
            <p>Match a player of your rank. </p>
            <br></br>
         <p> Challenge your opponent and become the MVP of the Parisian playgrounds !</p>
        </article>
        <br></br>

        <article className="art3">
        <h3>COMMUNITY</h3>
          <img src="client\public\Player.png" alt=""></img>
            <p>The best community in Paris. </p>
            <br></br>
          <p>Meet the players of the largest basketball community in Paris</p>
        </article>
   
    </div>
    </div>
   
  )
  }
}