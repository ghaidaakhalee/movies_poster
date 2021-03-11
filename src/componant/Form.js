import React, { Component } from "react";
import fire from "../config/fire";
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      hasAcount: false,
      erorr: "",
    };
  }

  SingIn = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err.message);
        this.setState({ erorr: err.message });
      });
  };

  SingUp = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err.message);
        this.setState({ erorr: err.message });
      });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Enter Your Email</label>

            <input
              type="email"
              class="form-control"
              id="email1"
              aria-describedby="emailHelp"
              placeholder="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <p className="errorMessage">{this.state.erorr}</p>
          </div>
          <div className="form-group">
            <label>Enter Your Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <div className="form-check"></div>
          <div className="btnContiner">
            {this.state.hasAcount ? (
              <>
                <button
                  type="button"
                  class="btn btn-warning "
                  onClick={(e) => {
                    this.SingIn(e);
                  }}
                >
                  Sing In
                </button>
                <p>
                  {" "}
                  Don't have an account ?
                  <span onClick={() => this.setState({ hasAcount: false })}>
                    Sing Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={(e) => {
                    this.SingUp(e);
                  }}
                >
                  Sing Up
                </button>
                <p>
                  {" "}
                  have an account ?{" "}
                  <span onClick={() => this.setState({ hasAcount: true })}>
                    Sing In
                  </span>
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    );
  }
}
