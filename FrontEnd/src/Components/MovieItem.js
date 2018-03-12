import React from 'react'
import { connect } from 'react-redux'
import { FavoriteMovieRef, MovieRef } from '../firebase'

class MovieItem extends React.Component{

    FavoriteMovie() {
        //add to favorites on the database
        const { email } = this.props.user;
        const { MovieName, serverKey } = this.props.Movie
        FavoriteMovieRef.push({email, MovieName})
    }

    render() {
        const { email, MovieName} = this.props.Movie;
        return (
            <div 
            className ="container"
            style={{margin: '5px'}}
            >
                <strong>{MovieName}</strong>
                <span> submitted by <em>{email}</em></span>
                <button 
                className="btn btn-info" 
                onClick={() => this.FavoriteMovie()}
                style={{marginRight: '5px'}}
                >
                Favorite
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(MovieItem);