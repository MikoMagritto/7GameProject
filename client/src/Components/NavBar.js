import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <ul>
          <li>
            <Link to="/signup"> S'inscrire</Link>
          </li>
          <li>
            <Link to="/login"> Se connecter </Link>
          </li>
          <li>
            <Link to="/concept">Notre concept</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/our-solution">Our Solution</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
