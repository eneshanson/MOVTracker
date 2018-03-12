import React from "react";
import { Link } from 'react-router'

export default class Favorites extends React.Component {
  render() {
    return (

      <div className="container">
        <h1>Favorites</h1>
        <hr />
        <h2><Link to="FavoriteActorList"> Your Favorite Actors</Link></h2>
        <h2><Link to="FavoriteMovieList"> Your Favorite Movies</Link></h2>
      </div>
    )
  }
}