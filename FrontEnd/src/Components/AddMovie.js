import React from 'react'
import { MovieRef } from '../firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AddMovie extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            MovieName: ''
        }
    }

    AddMovie() {
        console.log('this', this)
        const { MovieName } = this.state;
        const { email } = this.props.user;
        MovieRef.push({email, MovieName})
    }

    render(){
        return(
            <div className="container">
                <h1>Add Movies Here!</h1>
                <input 
                    type="text"
                    placeholder="Add a Movie"
                    onChange={event => this.setState({MovieName: event.target.value})}
                />
                <button 
                className="btn btn-info"
                type="button"
                onClick={() => this.AddMovie()}
                >
                    Submit
                </button>
                    <div>
                        <p>
                            or check out the <Link to="MovieList"> Movie List </Link>
                        </p>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return{
        user
    }
}

export default connect(mapStateToProps, null)(AddMovie)