import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

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
              <Link to="/games">Find a game</Link>
            </li>
            <li>
              <Link to="/games/add">Create a game</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup"> Sign Up</Link>
            </li>
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <li>
              <Link to="/">Our Concept</Link>
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
