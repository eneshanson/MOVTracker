import React from 'react'
import { connect } from 'react-redux'
import { MovieRef } from '../firebase'
import { SetMovies } from '../actions'
import  MovieItem  from './MovieItem'

class MovieList extends React.Component {
    componentDidMount() {
        MovieRef.on('value', snap => {
            let Movies = [];
            snap.forEach(Movie => {
                const { email, MovieName } = Movie.val();
                const serverKey = Movies.key;
                Movies.push({ email, MovieName, serverKey });
            })
            
            this.props.SetMovies(Movies);
        })
    }
 
    render() {
        return (
            <div className="container">
                <h1> Movie List </h1>
                {
                    this.props.Movies.map((Movie, index) => {
                        return ( 
                            // <div key={index}>{Actor.ActorName}</div>
                            <MovieItem key={index} Movie={Movie} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { Movies } = state;
    return {
        Movies
    }
}

export default connect(mapStateToProps, { SetMovies }) (MovieList)