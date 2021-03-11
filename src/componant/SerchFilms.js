import React, { Component } from "react";

export default class SerchFilms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchUser: "",
    };
  }

  getSearchUser = (e) => {
    this.setState({ searchUser: e.target.value });
  };

  render() {
    return (
      <nav className="nav justify-content-center">
        <div className="container-fluid ">
          <img
            src="https://media.giphy.com/media/KHik7C06SeB78uIHd1/giphy.gif"
            class=" popCorn img-fluid"
          ></img>
          <img
            src="https://media.giphy.com/media/w8eGCvumHPmAyfEf9y/giphy.gif"
            class="cinma img-fluid"
          ></img>
          <img
            src="https://media.giphy.com/media/YRVCEL5Oi5EGh6NCh7/giphy.gif"
            class="movetime img-fluid"
          ></img>

          <form>
            <div className="d-flex">
              <input
                className="form me-2 col-xs-3 b"
                type="search"
                aria-label="Search"
                onChange={this.getSearchUser}
                value={this.props.searchUser}
              />

              <button
                className="btn btn-warning searchButton"
                type="submit"
                onClick={(e) => {
                  this.props.handleSubmit(e, this.state.searchUser);
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

/*
// In this component I want to create an input search
// It allows the user to search for the movie name and put it in the list
i need for that:
first creat input search 
creat function to set state of the searchUser

*/
