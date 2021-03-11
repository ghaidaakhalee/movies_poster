import React, { Component } from "react";
import fire from "../config/fire";

import Form from "./Form";
import LogOut from "./LogOut";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  componentDidMount = () => {
    this.authListener();
  };
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
      }
      console.log(this.state.user);
    });
  };

  render() {
    return (
      <div className="App">
        <div className="row backgroundimg">
          <div className="container-md">
            <h1 className="home">WELCOME</h1>
            {this.state.user ? <LogOut /> : <Form />}
          </div>
        </div>
      </div>
    );
  }
}
