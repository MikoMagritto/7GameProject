import React, { Component } from 'react';
import { signup } from './auth-service';
import Select from 'react-select'
import { uploadFile } from './auth-service';
import { saveNewThing } from './auth-service';
import './Signup.css'

import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    height: "",
    age: "",
    level: "debutant",
    avatar: "",
  }

  handleFormSubmit = (event) => {
    console.log(this.state);

    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const height = this.state.height;
    const age = this.state.age;
    const level = this.state.level;
    const avatar = this.state.avatar;



    signup(username, password, email, height, age, level, avatar)

      .then(response => {
        //console.log("response client :", response);
        this.setState({ username: "", password: "", email: "", height: "", age: "", level: "", avatar: "" });
        this.props.addUser(response);
        this.props.history.push("/auth");
      })
      .catch(error => console.log(error))


  }

  handleChange = (event) => {
    //console.log(event)
    const { name, value } = event.target;
    //console.log(name,value)
    this.setState({
      [name]: value
    })
  }
  fileChange = (e) => {
    console.log('The file to be uploaded is: ', e.target.files[0]);


    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('avatar', e.target.files[0]);

    uploadFile(uploadData)
      .then(response => {
        console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ avatar: response.avatar });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });

  };

  render() {
    const listLevel = [
      { value: 'debutant', label: 'Débutant' },
      { value: 'Amateur', label: 'Amateur' },
      { value: 'confirme', label: 'Confirmé' },
      { value: 'ProA', label: 'ProA' },
      { value: 'ProB', label: 'ProB' }
    ]   
    return (
      <div className="signUp">
        <img className="imgSignup" src="https://res.cloudinary.com/la-chaussette-sale/image/upload/v1639498653/photo-1542221672070-2068b796fda3_gtihan.jpg" />
        <div className='form-signup'>
      
          <img src='https://res.cloudinary.com/dro81vxlb/image/upload/v1628768443/logo_vf_mwvddj.png' alt="" className="logo"/>
          <h1>Sign up</h1>
          <form onSubmit={this.handleFormSubmit}>
          {this.state.error && (
            <p className="error">
              {this.state.error}
            </p>)}

            <input type="text" name="username"  value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder="Username" />
          
          
            <input type="password" name="password"  value={this.state.password} onChange={(e) => this.handleChange(e)}  placeholder="Password"/>
        
            
            <input type="text" name="email"  value={this.state.email} onChange={(e) => this.handleChange(e)} placeholder="Email" />

          
            <input type="number" name="height"  value={this.state.height} onChange={(e) => this.handleChange(e)} placeholder="Height"/>
          

            <input type="number" name="age"  value={this.state.age} onChange={(e) => this.handleChange(e)} placeholder="Age"/>
          
              
          {/*<Select options={listLevel} name='level' />*/}
              
              
            <select name="level" onChange={(e) => this.handleChange(e)}>
                {/* <option value=""></option> */}
                {listLevel.map((level) => {
                  return <option value={level.value}>{level.label}</option>;
                })}
            </select>
         

        
            
              
            <input type="file" onChange={(e) => this.fileChange(e)}  placeholder="Profile Pic"/>
          
          <button className="create-my-account" type="submit">I create my account</button>
          </form>
        </div>
      </div>

    
    )
  }
}


