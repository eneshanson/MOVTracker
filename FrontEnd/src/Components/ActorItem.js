import React from 'react'
import { connect } from 'react-redux'
import { FavoriteActorRef, ActorRef } from '../firebase'

class ActorItem extends React.Component{

    FavoriteActor() {
        //add to favorites on the database
        const { email } = this.props.user;
        const { ActorName, serverKey } = this.props.Actor
        console.log('email', email, 'ActorName', ActorName);
        FavoriteActorRef.push({email, ActorName})
    }

    render() {
        const { email, ActorName} = this.props.Actor;
        return (
            <div 
            className ="container"
            style={{margin: '5px'}}
            >
                <strong>{ActorName}</strong>
                <span> submitted by <em>{email}</em></span>
                <button 
                className="btn btn-info" 
                onClick={() => this.FavoriteActor()}
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

export default connect(mapStateToProps, null)(ActorItem);