import React, { Component } from "react";

export default class WatchLater extends Component {
  render() {
    const WatchLaterCard = this.props.WatchLater.map((item, index) => {
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
            <input className="wachTime" placeholder="add watch time"></input>
          </div>
          <button
            className="button"
            onClick={() => this.props.RemoveOneWatchLaterMovie(item)}
          >
            {" Remove "}
            <img
              className="RemoveWatchiteIcon"
              src="https://media.giphy.com/media/lnD5xdflbm41U8Izqe/giphy.gif"
            ></img>
          </button>
        </div>
      );
    });
    return (
      <div>
        <img
          src="https://media.giphy.com/media/8754ImlPF86US07FUi/giphy.gif"
          class="img-fluid"
          alt="No"
        ></img>
        <button
          type="button"
          class="btn btn-warning watchLater"
          onClick={(e) => {
            this.props.RemoveAllWatchLaterMovie(e.target);
          }}
        >
          Remove All
        </button>
        <div className="row container-fluid center ">
          {WatchLaterCard.length > 0 ? (
            WatchLaterCard
          ) : (
            <div>
              <h2 className="NoFavoriteList">
                You don't have movies to watch later{" "}
              </h2>
              <img
                src="https://media.giphy.com/media/10S4rk0J10AKlO/giphy.gif"
                className="imgWatch"
              ></img>
            </div>
          )}
        </div>
      </div>
    );
  }
}
