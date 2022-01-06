import axios from "axios";
import React, { Component } from "react";
import { uploadFile } from "../auth/auth-service";
import "../Profile/EditProfile.css";
import { Formik, Form, Field } from "formik";
import { TexteField } from "./TexteField";
import { SelectLevel } from "./SelectLevel";
import * as Yup from "yup";

export default class EditProfile extends Component {
  state = {
    username: this.props.userInSession.username,
    email: this.props.userInSession.email,
    height: this.props.userInSession.height,
    age: this.props.userInSession.age,
    level: this.props.userInSession.level,
    avatar: this.props.userInSession.avatar,
    error: "",
  };

  handleFormSubmit = (values) => {
    console.log("values ", values);
    const username = values.username
    const {avatar} = values
    console.log("avatar",avatar)

    const uploadData = new FormData();
    // uploadData.append({"avatar": avatar});

    uploadData.append('avatar', avatar.files[0], 'photo.jpg')

    console.log("uploadData : ", uploadData )

    uploadFile(uploadData)
    .then((response) => {
      console.log("response.avatar is: ", response);
      // after the console.log we can see that response carries 'secure_url' which we can use to update the state
      // this.setState({ avatar: response.avatar });
      return response.avatar
    })
    .catch((err) => {
      console.log("Error while uploading the file: ", err);
    });

    // const cloudinaryUpload = await(this.fileChange(avatar))
    // console.log("cloudinaryUpload", cloudinaryUpload)

    // const { username, email, height, age, level, avatar } = this.state;

    const id = this.props.userInSession._id;

    axios
      .put(
        `${process.env.REACT_APP_APIURL || ""}/auth/edit/${id}`,
        {
         ...values
        },
        { withCredentials: true }
      )
      .then((response) => {
        //console.log("response", response);
        this.props.updateUser(response.data);
        this.props.history.push("/auth");
      });
  };

  handleChange = (event) => {
    //console.log("event :", event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileChange = (avatar) => {
    //console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("avatar", avatar);

    uploadFile(uploadData)
      .then((response) => {
        //console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        // this.setState({ avatar: response.avatar });
        return response.avatar
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    // if (!this.state) {
    //   return "loading";
    // }
    const validate = Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      // email: Yup.string()
      //   .max(15, "Must be 15 characters or less")
      //   .required("Required"),
    });
    return (
      <div className="EditProfile">
        <Formik
          onSubmit={this.handleFormSubmit}
          initialValues={{
            username: "",
            email: "",
            height: "",
            age: "",
            level: "",
            avatar: "",
          }}
          validationSchema={validate}
        >
          {(formik, form) => (
            <div>
              <h1>Edit Profile</h1>
              {/* {console.log("Object formik : ", formik.values)} */}
              <Form>
                <Field name="username">
                  {({ field }) => {
                    //console.log(field);
                    return (
                      <TexteField
                        label="Username"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        type="text"
                      />
                    );
                  }}
                </Field>
                <Field name="email">
                  {({ field }) => {
                    return (
                      <TexteField
                        label="Email"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        type="email"
                      />
                    );
                  }}
                </Field>
                <Field name="height">
                  {({ field }) => {
                    return (
                      <TexteField
                        label="height"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <Field name="age">
                  {({ field }) => {
                    return (
                      <TexteField
                        label="Age"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        type="number"
                        // value={this.state.age}
                        // onChange={(e) => this.handleChange(e)}
                      />
                    );
                  }}
                </Field>
                <Field name="level">
                  {({ field }) => {
                    return (
                      <SelectLevel
                        label="Level"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        // type="select"
                      />
                    );
                  }}
                </Field>
                
                <Field name="avatar">
                  {({ field,form }) => {
                    //console.log("field avatar : ",field)
                    return (
                      <TexteField
                        label="Image"
                        name= {field.name}
                        value={field.value}
                        // onChange={field.onChange}
                        onChange={(e) => form.setFieldValue('avatar',e.currentTarget.files[0])}
                        type="file"
                      />
                    );
                  }}
                </Field>

                <button className="submitForm" type="submit">
                  Change
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

//   deleteProfile = (e) => {
//     e.preventDefault();
//     const id = this.props.userInSession._id;

//     axios.get(`http://localhost:5000/auth/delete/${id}`)
//     .then(() => {
//         console.log("utilisateur delete")
//       this.props.history.push("/");
//     });
//   };

/* <h1>Edit Profile</h1>
        <form onSubmit={this.handleFormSubmit} className="formCG">
          {this.state.error && <p className="error">{this.state.error}</p>}
          <p>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </p>
          <p>
          
            
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
          </p>
          <p>
            <label>
            </label>
            <input
              type="number"
              name="height"
              value={this.state.height}
              onChange={(e) => this.handleChange(e)}
            />
          </p>

          <p>
          
            
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={(e) => this.handleChange(e)}
            />
          </p>

          <p>
          
            
            <select
              name="level"
              value={this.state.level}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="Débutant">Novice</option>
              <option value="Amateur">Beginner</option>
              <option value="Confirmé">Intermediate</option>
              <option value="ProA">ProA</option>
              <option value="ProB">ProB</option>
            </select>
          </p>

          <p>
            <input type="file" onChange={(e) => this.fileChange(e)} />
          </p>
          <button>Change</button>
        </form>*/
