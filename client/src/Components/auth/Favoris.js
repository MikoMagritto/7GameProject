import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Favoris.css";

const Favoris = (props) => {
  return (
    <div id="favoris">
      <h2> Favoris</h2>
      <div className='playgrounds'>
        <div className='playground'>
          <img src="https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/St_Paul_nzpqdz.jpg"></img>
          <p>Playground St Paul</p>
        </div>
        <div className='playground'>
          <img src="https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581101/trivse_fd75vt.jpg"></img>
          <p>Playground Trevise</p>
        </div>
        <div className='playground'>
          <img src="https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581100/factory_jwzhd1.jpg"></img>
          <p>Playground Factory</p>
        </div>
        <div className='playground'>
        <img src="https://res.cloudinary.com/dp1lq7mea/image/upload/v1627581099/14e_nr5njf.jpg"></img>
        <p>Playground Paris 14e</p>
      </div>
    </div>
    </div>
   

  );
}

export default Favoris;
