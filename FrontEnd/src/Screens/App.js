import React from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'

class App extends React.Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div className="container">
            <h1>Sign out</h1>
                <hr />
                <strong>Thank you for using MOVTracker</strong>
                <br />
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    sign out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null) (App);