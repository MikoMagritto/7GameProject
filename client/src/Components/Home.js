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
            <a href="/games">GET STARTED</a>
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
          <h1>OUR SOLUTION</h1>
          <div className='container'>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628330156/terrain_mri2jf.png'></img>
              <h2> Find </h2>
              <h3>Are you looking for a players ?</h3>
              <p> Seven game will geolocate the playgrounds and the players around you.</p>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628330225/ballon_wyazxz.png'></img>
              <h2>Play</h2>
              <h3>Match a player of your rank</h3>
              <p>Challenge your opponent and become the MVP of the Parisian playgrounds !</p>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628330339/joueur_nmink2.png'></img>
              <h2>Community</h2>
              <h3>The best community in Paris</h3>
              <p>Meet the players of the largest basketball community in Paris.</p>
            </div>
          </div>
        </div>

        <div className='section5'>
          <h1>TEAMS</h1>
          <div className='container'>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628332929/Walid_nbsj9h.png'></img>
              <h2>Walid Blila</h2>
              <h3>Rock Star Developer</h3>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628333464/WhatsApp_Image_2021-08-07_at_12.39.57_zmsxyj.jpg'></img>
              <h2>Chloé Toussaint</h2>
              <h3>Xtreme Landscaper</h3>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628332922/Michel_zfrohe.png'></img>
              <h2>Michel Hardy</h2>
              <h3>React Killer</h3>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dp1lq7mea/image/upload/v1628333884/Tanoh_rmcswc.png'></img>
              <h2>Tanoh Dje</h2>
              <h3>Super Pro Designer</h3>
            </div>
          </div>
        </div>

        <div className='section6'>
          <div className='info'>
            <h1>INFO</h1>
            <svg className='shape' width="489" height="391" viewBox="0 0 489 391" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 75.0352L443.453 0L489 391L68.0696 357.821L0 75.0352Z" fill="#FABB76" />
            </svg>
            <div className='content'>
              <div>
                <h2>ADDRESS</h2>
                <h3>226 Bd Voltaire, 75011 Paris</h3>
              </div>
              <div>
                <h2>PHONE</h2>
                <h3>01.79.75.40.00</h3>
              </div>
              <div>
                <h2>EMAIL</h2>
                <h3>contact@sevengame.com</h3>
              </div>
            </div>
          </div>
          <div className='contact'>
            <h1> CONTACT US</h1>
            <p>Any suggestion ?
              Feel free to contact us !</p>
            <form>
              <div className='form'>
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" required />
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required />
                <label for="subject">Subject: </label>
                <input type="subject" name="subject" id="subject" required />
              </div>
              <div className='text'>
                <textarea placeholder="Enter your message !" id="story" name="story"
                  rows="5" cols="33" />
                <input className='button' type="submit" value="SEND MESSAGE "></input>

              </div>
            </form>


          </div>
        </div>

      </div>

    )
  }
}
export default Login