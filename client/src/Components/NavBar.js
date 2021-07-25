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
            <Link to="/">Notre concept</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Our Solution</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
