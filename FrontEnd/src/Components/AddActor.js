import React from 'react'
import { ActorRef } from '../firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AddActor extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            ActorName: ''
        }
    }

    AddActor() {
        const { ActorName } = this.state;
        const { email } = this.props.user;
        ActorRef.push({email, ActorName})
    }

    render(){
        return(
            <div className="container">
                <h1>Add Actors Here!</h1>
                <input 
                    type="text"
                    placeholder="Add an actor"
                    onChange={event => this.setState({ActorName: event.target.value})}
                />
                <button 
                className="btn btn-info"
                type="button"
                onClick={() => this.AddActor()}
                >
                    Submit
                </button>
                    <div>
                        <p>
                            or check out the <Link to="ActorList"> Actor List </Link>
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

export default connect(mapStateToProps, null)(AddActor)