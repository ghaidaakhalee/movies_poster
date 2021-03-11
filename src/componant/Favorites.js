import React, { Component } from "react";

export default class Favorites extends Component {
  render() {
    // use map to itreat each card film from array
    const favorite = this.props.favorite;
    const favoriteArray = favorite.map((item, index) => {
      return (
        <div className="card" key={index}>
          <img
            src={item.Poster}
            className="card-img-top poster"
            alt="No poster"
          />
          <div className="card-body movie-info">
            <p className="card-title">{item.Title}</p>
            <p className="card-title">{item.Year}</p>
          </div>
          <button
            className="button"
            onClick={() => this.props.deletOneFavoriteMovie(item)}
          >
            {" Remove "}
            <img
              className="RemovefavoriteIcon"
              src="https://media.giphy.com/media/kGuA6OhK7KcU809eg4/giphy.gif"
            ></img>
          </button>
        </div>
      );
    });
    return (
      <div className="backgroundFavorite">
        <nav className="nav justify-content-center">
          <div className="container-fluid ">
            <button
              type="button"
              className="btn btn-warning FavRemoveBtn"
              onClick={(e) => {
                this.props.deletAllFavorite(e.target);
              }}
            >
              Remove All
            </button>
          </div>
        </nav>

        {/* here i want to add condition, if the favorite movies array is empty you see(you don't have favorite movie).if not see the favorite movie */}
        <div className="row container-fluid center">
          {favoriteArray.length > 0 ? (
            favoriteArray
          ) : (
            <h2 className="NoFavoriteList">you don't have favorite movies</h2>
          )}
        </div>
      </div>
    );
  }
}
