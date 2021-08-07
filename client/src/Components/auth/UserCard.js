import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="userCard">

      <div className='userPersonalData'>
        <img src={props.userInSession.avatar}></img>
        <div className ='div1'>
          <span>Paris 9ème</span>
          <span>{props.userInSession.age} ans </span>
        </div>
        <div>
          <span>Height</span>
          <span>{props.userInSession.height} cm</span>
        </div>
        <div>
          <span>Weight</span>
          <span>77 kg</span>
        </div>
      </div>

      <div className='userStats'>
        <div>
          <span>12</span>
          <span>Matchs joués</span>
        </div>
        <div>
          <span>6</span>
          <span>Lieux préférés</span>
        </div>
        <div>
          <span>5</span>
          <span>Matchs crées</span>
        </div>
      </div>

    </div>
  );
}

export default UserCard;
