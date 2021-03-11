import React, { Component } from "react";

export default class MoviesList extends Component {
 
  
  render() {
    const FavoritesMovie = this.props.FavoritesMovie;
    const AddWatchLaterMovie = this.props.AddWatchLaterMovie;

    return (
      <div className="card ">
        <img
          src={this.props.src}
          className="card-img-top poster"
          alt="No poster"
        />
        <div className="card-body movie-info">
          <p className="card-title">{this.props.title}</p>
          <p className="card-title">{this.props.Year}</p>

          <button className="button" onClick={FavoritesMovie}>
            {"add to favorite  "}
            <img
              src="https://media.giphy.com/media/ZyGaRpbkSxIq8jtTUm/giphy.gif"
              className="favoriteIcon"
            ></img>
          </button>

          <button className="button" onClick={AddWatchLaterMovie}>
            {"whatch later "}
            <img
              src="https://media.giphy.com/media/3vxbwZXwe0eyQr8lkR/giphy.gif"
              className="laterIcon"
            ></img>
          </button>
        </div>
      </div>
    );
  }
}
