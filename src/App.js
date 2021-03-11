import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import Home from "./componant/Home";
import Movies from "./componant/Movies";
import Favorites from "./componant/Favorites";
import WatchLater from "./componant/WatchLater";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // creat state array for movies list
      movies: [],
      //creat state to storage what the user search for

      favorite: [],
      WatchLater: [],
    };
  }

  // creat function to add moive into watchlater array
  AddWatchLaterMovie = (movie) => {
    const conditionLater = this.state.WatchLater.find(
      (item) => item.Title === movie.Title
    );
    if (conditionLater) {
      console.log("you already add into Watch Later ");
    } else {
      const WatchLaterArray = [...this.state.WatchLater, movie];
      this.setState({ WatchLater: WatchLaterArray });
    }
  };
  // creat function to remove all watchlater array
  RemoveAllWatchLaterMovie = () => {
    this.setState({ WatchLater: [] });
  };

  RemoveOneWatchLaterMovie = (movie) => {
    const delet = this.state.WatchLater.filter(
      (item) => item.Title !== movie.Title
    );
    this.setState({ WatchLater: delet });
  };
  //creat function to add the films into favorite array

  FavoritesMovie = (movie) => {
    /*
    I have a problem here. Every time I click the button,
     the movie is added to the favorites page again.
    solution?? 
    I have to solve this problem by add if statement to 
    compare between the title of the movie 
     if the title found in the array the movie not 
      will be added again
     */
    const conditionFav = this.state.favorite.find(
      (item) => item.Title === movie.Title
    );
    if (conditionFav) {
      console.log("you already add into favorit ");
    } else {
      const favoriteArray = [...this.state.favorite, movie];
      this.setState({ favorite: favoriteArray });
    }
  };

  // creat function to deldet all favorite movie
  deletAllFavorite = () => {
    this.setState({ favorite: [] });
  };

  //creat function to remove one movie from array

  deletOneFavoriteMovie = (movie) => {
    /*i have problem here, when i click 
    remove button it is remove all. 
    i want to remove just the movie i 
    click on it 
    solution:
    i will try to use filter method to compair
     betweem title of the movie i want to remove
     */
    const remove = this.state.favorite.filter(
      (item) => item.Title !== movie.Title
    );
    this.setState({ favorite: remove });
  };

  // creat function to setState the searchUser state

  // get API for movies poster
  getFilms = (searchUser) => {
    console.log("test function");
    axios

      .get(`https://www.omdbapi.com/?s=${searchUser}&apikey=19c9609`)
      .then((response) => {
        console.log(response.data.Search);
        const moviesList = response.data.Search;

        // if statement (only setState if get response)
        if (moviesList) {
          this.setState({ movies: moviesList }); // update the movies list
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // creat function to execute gitFilms function when the user click on the button
  handleSubmit = (e, searchUser) => {
    e.preventDefault();
    this.getFilms(searchUser);
  };

  render() {
    // console.log(this.state.favorite);
    // console.log(this.state.WatchLater)
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <Link
              to="/"
              className="flex-sm-fill text-sm-center nav-link active"
            >
              Home
            </Link>
            <Link to="/Movies" className="flex-sm-fill text-sm-center nav-link">
              Movies
            </Link>
            <Link
              to="/Favorites"
              className="flex-sm-fill text-sm-center nav-link"
            >
              Favorites
            </Link>

            <Link
              to="/WatchLater"
              className="flex-sm-fill text-sm-center nav-link"
            >
              Watch Later
            </Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route
            path="/Movies"
            component={(props) => {
              return (
                <Movies
                  Routeprops={props}
                  movise={this.state.movies}
                  FavoritesMovie={this.FavoritesMovie}
                  AddWatchLaterMovie={this.AddWatchLaterMovie}
                  handleSubmit={this.handleSubmit}
                />
              );
            }}
          />
          <Route
            path="/Favorites"
            component={(props) => {
              return (
                <Favorites
                  Routeprops={props}
                  favorite={this.state.favorite}
                  deletAllFavorite={this.deletAllFavorite}
                  deletOneFavoriteMovie={this.deletOneFavoriteMovie}
                />
              );
            }}
          />

          <Route
            path="/WatchLater"
            component={(props) => {
              return (
                <WatchLater
                  Routeprops={props}
                  WatchLater={this.state.WatchLater}
                  RemoveAllWatchLaterMovie={this.RemoveAllWatchLaterMovie}
                  RemoveOneWatchLaterMovie={this.RemoveOneWatchLaterMovie}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}
