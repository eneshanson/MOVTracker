import React from 'react'
import { connect } from 'react-redux'
import { ActorRef } from '../firebase'
import { SetActors } from '../actions'
import  ActorItem  from './ActorItem'

class ActorList extends React.Component {
    componentDidMount() {
        ActorRef.on('value', snap => {
            let Actors = [];
            snap.forEach(Actor => {
                const { email, ActorName } = Actor.val();
                const serverKey = Actors.key;
                Actors.push({ email, ActorName, serverKey });
                console.log('Actors', Actors);
            })
            
            this.props.SetActors(Actors);
        })
    }

    render() {
        return (
            <div className="container">
                <h1> Actor List </h1>
                {
                    this.props.Actors.map((Actor, index) => {
                        return ( 
                            // <div key={index}>{Actor.ActorName}</div>
                            <ActorItem key={index} Actor={Actor} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { Actors } = state;
    return {
        Actors
    }
}

export default connect(mapStateToProps, { SetActors }) (ActorList)