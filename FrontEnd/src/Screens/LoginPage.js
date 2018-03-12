import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { Link } from 'react-router'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        console.log('this.state', this.state);
        const {email, password } = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error)
                this.setState({error})
            })
    }


    render() {
        return (
            <div className="container">
                <h1>Sign in!</h1>
                <hr />
                <div>
                    <h2>email</h2>
                    <input
                        onChange={event => this.setState({email: event.target.value})}
                        type="text"
                        placeholder="email"
                    />
                    <h2>Password</h2>
                    <input
                        onChange={event => this.setState({password:event.target.value})}
                        type="password"
                        placeholder="password"
                    />
                    <div>
                        <button
                            className="btn btn-info"
                            type="button"
                            onClick={() => this.signIn()}
                        >
                            sign in
                    </button>
                    <div>{this.state.error.message}</div>
                    </div>
                    <div>
                        <div>
                        <Link to="RegistrationPage">Don't have an account? Register Here</Link>
                        </div>
                        <div>
                        <Link to="App">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}