import React from "react";
import { useState } from "react";
import axios from "axios";

const ConnectForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    post: "",
    descrip: "",
  });

  // Handle onChange inputes to update state
  const handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((event) => {
      if (name === "name") {
        return {
          name: value,
          email: event.email,
          post: event.post,
          descrip: event.descrip,
        };
      } else if (name === "email") {
        return {
          name: event.name,
          email: value,
          post: event.post,
          descrip: event.descrip,
        };
      } else if (name === "post") {
        return {
          name: event.name,
          email: event.email,
          post: value,
          descrip: event.descrip,
        };
      } else if (name === "descrip") {
        return {
          name: event.name,
          email: event.email,
          post: event.post,
          descrip: value,
        };
      }
    });
  }
  console.log(user);

  // send data to backend server using axios
  const submit = (e) => {
    const { name, email, post, descrip } = user;
    if (name && email && post && descrip) {
      axios
        .post("http://localhost:4000/home", user)
        .then(() => console.log("send successfully"))
        .catch((rej) => console.log(rej));
        setUser(() => {
      return {
        name: "",
        email: "",
        post: "",
        descrip: "",
      };
    })
    }else{
      e.preventDefault();
    }
  };

  // render on document
  return (
    <div className="form-container">
      <form className="form" type="submit">
        <label>Name:</label>
        <input
          name="name"
          className="name"
          onChange={handler}
          type="text"
          placeholder="Name Here"
        ></input>
        <label for="email">Email:</label>
        <input
          name="email"
          className="email"
          onChange={handler}
          type="email"
          placeholder="Email Here"
        ></input>
        <input for="photo" type="file" placeholder="Name Here"></input>
        <label for="post">Post:</label>
        <input
          name="post"
          className="post"
          onChange={handler}
          for="post"
          type="text"
          placeholder="post ex. CEO or employee"
        ></input>
        <label for="describe">Description:</label>
        <input
          name="descrip"
          className="describtion"
          onChange={handler}
          for="describe"
          type="text"
          placeholder="Describe yourself"
        ></input>
        <button onClick={submit} className="btn btn-primary btn-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;
