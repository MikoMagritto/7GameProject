import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = (props) => {
  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className ="profil">
        <img src = 'https://res.cloudinary.com/dp1lq7mea/image/upload/v1628792622/Michel-removebg-preview_cvn4nh.png'/>
        <p>Michel</p>
        <p className='pastil' >3</p>
      </div>

      <div className ="profil">
        <img src = 'https://res.cloudinary.com/dp1lq7mea/image/upload/v1628792622/Walid-removebg-preview_kzywgo.png'/>
        <p>Walid</p>
        <p className='pastil'>2</p>
      </div>

      <div className ="profil">
        <img src = 'https://res.cloudinary.com/dp1lq7mea/image/upload/v1628792622/Elodie-removebg-preview_c5jwur.png' />
        <p>Elodie</p>
        <p className='pastil'> 5</p>
      </div>
    </div>
  );
}

export default Chat;
