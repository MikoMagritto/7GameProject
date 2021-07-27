import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Components/NavBar.css";

const NavBar = (props) => {
    return (
      <div className="navBar">
        {props.userInSession ? (
          <ul>
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
            <li>
              <Link to="/">Find a game</Link>
            </li>
            <li>
              <Link to="/">Create a game</Link>
            </li>
          </ul>
        ) : (
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
        )}
      </div>
    );
  }

export default NavBar;
