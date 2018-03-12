import React from 'react'
import { FavoriteActorRef } from '../firebase' 
import { connect } from 'react-redux'
import { SetFavoriteActors } from '../actions'


class FavoriteActorList extends React.Component{
    componentDidMount() {
        FavoriteActorRef.on('value', snap => {
            let FavoriteActors= [];
            snap.forEach(FavoriteActor => {
                const { email, ActorName} = FavoriteActor.val();
                FavoriteActors.push({email, ActorName});
            })
            console.log('FavoriteActors', FavoriteActors)
            this.props.SetFavoriteActors(FavoriteActors)
        })
    }

    clearActors() {
        FavoriteActorRef.set([]);
    }

    render() {
        console.log('this.props.FavoriteActors', this.props.FavoriteActors)
        return(
            <div className="container">
                <h1>Favorite Actor List</h1>
                {
                    this.props.FavoriteActors.map((FavoriteActor, index) =>{
                        const { ActorName, email } = FavoriteActor;
                        return (
                            <div key={index}>
                            <strong>{ActorName}</strong>

                            </div>
                        )
                    })
                }
                <br />
                <button 
                className="btn btn-info"
                onClick={() => this.clearActors()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { FavoriteActors } = state;
    return {
        FavoriteActors
    }
}

export default connect(mapStateToProps, {SetFavoriteActors})(FavoriteActorList)