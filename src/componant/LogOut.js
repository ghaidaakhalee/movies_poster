import React, { Component } from "react";
import fire from "../config/fire";
export default class LogOut extends Component {
  LogOut = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => {
            this.LogOut();
          }}
        >
          log out
        </button>
      </div>
    );
  }
}
