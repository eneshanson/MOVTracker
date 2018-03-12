import React from "react";
import { Link } from 'react-router'
import AddMovie from '../Components/AddMovie'
import AddActor from '../Components/AddActor'
import MovieList from '../Components/MovieList'
import ActorList from '../Components/ActorList'

export default class Archives extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Archives</h1>
                <hr />
                <p>Please contribute to MOVTracker by  
                    <Link to ="AddMovie"> adding your Favorite movies </Link>
                or by 
                    <Link to="AddActor"> adding your favorite actor </Link>
                </p>
                <MovieList />
                <ActorList />
            </div>
        )
    }
}