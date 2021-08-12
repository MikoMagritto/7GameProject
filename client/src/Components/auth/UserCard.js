import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="userCard">

      <div className='userPersonalData' style={{ backgroundImage: `url(${props.userInSession.avatar})` }}>
        <div className='divs'>
          <div >
            <span>Paris 9ème</span>
            <span>{props.userInSession.age} ans </span>
          </div>
          <div >
            <span>Height</span>
            <span>{props.userInSession.height} cm</span>
          </div>
          <div>
            <span>Weight</span>
            <span>77 kg</span>
          </div>
        </div>
      </div>

      <div className='userStats'>
        <div className='game'>
          <span className='orange'>12</span>
          <span>Games played</span>
        </div>
        <div>
          <span className='orange'>6</span>
          <span>Favorite playground</span>
        </div>
        <div>
          <span className='orange'>5</span>
          <span>Games Created</span>
        </div>
      </div>

    </div>
  );
}

export default UserCard;
