import React, { Component } from "react";
import SerchFilms from "./SerchFilms";
import MoviesList from "./MoviesList";

export default class Movies extends Component {
  // in this componant i want to creat render tow componant
  // 1- for searching moves
  // 2- for movies list to give me list of the films
  render() {
    // creat map to retern array of poster and title of the films list
    const moviesList = this.props.movise.map((movie, index) => {
      // shulde i use arrow function to pass
      return (
        <MoviesList
          key={index}
          src={movie.Poster}
          title={movie.Title}
          Year={movie.Year}
          FavoritesMovie={() => this.props.FavoritesMovie(movie)}
          AddWatchLaterMovie={() => this.props.AddWatchLaterMovie(movie)}
        />
      );
    });

    return (
      <div className="SearchBackground">
        <SerchFilms
          getsearchUser={this.props.getsearchUser}
          searchUser={this.props.searchUser}
          handleSubmit={this.props.handleSubmit}
        />

        <div>
          <div className=" row container-fluid center ">{moviesList}</div>

          <img
            src="https://media.giphy.com/media/Y34BR7U5SOj8tjnFBY/giphy.gif"
            className="img"
          ></img>
        </div>
      </div>
    );
  }
}
