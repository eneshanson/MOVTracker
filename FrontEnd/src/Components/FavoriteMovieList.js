import React from 'react'
import { FavoriteMovieRef } from '../firebase' 
import { connect } from 'react-redux'
import { SetFavoriteMovies } from '../actions'


class FavoriteMovieList extends React.Component{
    componentDidMount() {
        FavoriteMovieRef.on('value', snap => {
            let FavoriteMovies= [];
            snap.forEach(FavoriteMovie => {
                const { email, MovieName} = FavoriteMovie.val();
                FavoriteMovies.push({email, MovieName});
            })
            this.props.SetFavoriteMovies(FavoriteMovies)
        })
    }

    clearMovies() {
        FavoriteMovieRef.set([]);
    }

    render() {
        return(
            <div className="container">
                <h1>Favorite Movie List</h1>
                {
                    this.props.FavoriteMovies.map((FavoriteMovie, index) =>{
                        const { MovieName, email } = FavoriteMovie;
                        return (
                            <div key={index}>
                            <strong>{MovieName}</strong>

                            </div>
                        )
                    })
                }
                <br />
                <button 
                className="btn btn-info"
                onClick={() => this.clearMovies()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { FavoriteMovies } = state;
    return {
        FavoriteMovies
    }
}

export default connect(mapStateToProps, {SetFavoriteMovies})(FavoriteMovieList)