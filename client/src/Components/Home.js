import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { signup } from './auth/auth-service';
import { login } from './auth/auth-service';
import "./Home.css";


class Login extends React.Component {
  state = { email: '', password: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state
    login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" });
        this.props.updateUser(response)
        console.log(this.props.currentUser)
      })
      .catch(err => console.log(err))
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='home'>
        <div className='section1'>
          <div className='container'>
            <div className="text">
              <h1 className="orange">FIND</h1>
              <h1 className="orange">BASKETBALL COURT</h1>
              <h1>& GET INTO THE GAME</h1>
              <h2 className="orange">JOIN OUR COMMUNITY</h2>
            </div>
            <a href="/login">GET STARTED</a>
          </div>
        </div>

        <div className='section2'>
          <div>
            <h1> 100 </h1>
            <h2>BASKETBALL COURT IN PARIS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices vestibulum sociis eu consequat ultricies. Erat cras cursus.</p>
          </div>
          <div>
            <h1>500</h1>
            <h2>COMMUNITY MEMBERS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices vestibulum sociis eu consequat ultricies. Erat cras cursus.</p>
          </div>
          <div>
            <h1>500</h1>
            <h2>OUR MEMBERS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices vestibulum sociis eu consequat ultricies. Erat cras cursus.</p>
          </div>
        </div>

        <div className='section3'>
        <div className='container'>
          <h1>OUR CONCEPT</h1>
          <p>Seven game is an application for meet players around. Click on a field on the map for match with other like you.</p>
          <p>Play against player of your level for increase your rank on Seven Game</p>
          <p>During the year the teams SG will organize big tournaments by ranks. </p>
          <p>Lot of gifts for winners. </p>
        </div>
        </div>

        <div className='section4'>
        <div className='container4'>
          <h1>OUR SOLUTION</h1>
          <article>
        <h2>Find</h2>
        <img src ="client\public\Terrain2.png" alt=""></img>
         <p> Are you looking for a player ? 
          Seven Game will geolocate the playgrounds and the players around you.</p>
          </article>

      <article>
        <h3>Play</h3>
          <img src="client\public\ballon.png" alt=""></img>
            <p>Match a player of your rank. 
          Challenge your opponent and become the MVP of the Parisian playgrounds !</p>
        </article>

        <article>
        <h3>COMMUNITY</h3>
          <img src="client\public\Player.png" alt=""></img>
            <p>The best community in Paris. 
          Meet the players of the largest basketball community in Paris</p>
        </article>
        
        </div>
        </div>
      </div>

    )
  }
}
export default Login