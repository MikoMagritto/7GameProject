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
        <div className='div2'>
          <span>Height</span>
          <span>{props.userInSession.height} cm</span>
        </div>
        <div className='div3'>
          <span>Weight</span>
          <span>77 kg</span>
        </div>
      </div>

      <div className='userStats'>
        <div className='game'>
          <span className='orange'>12</span>
          <span>Matchs joués</span>
        </div>
        <div className='playground'>
          <span className='orange'>6</span>
          <span>Lieux préférés</span>
        </div>
        <div className= 'gamecreate'>
          <span className='orange'>5</span>
          <span>Matchs crées</span>
        </div>
      </div>

    </div>
  );
}

export default UserCard;
