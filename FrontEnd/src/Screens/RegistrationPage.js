import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { Link } from 'react-router'

export default class RegistrationPage extends React.Component {
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

    signUp(){
        console.log('this.state', this.state);
        const {email, password } = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error)
                this.setState({error})
            })
    }


    render() {
        return (
            <div className="container">
                <h1>Sign up!</h1>
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
                            onClick={() => this.signUp()}
                        >
                            sign up
                    </button>
                    <div>{this.state.error.message}</div>
                    </div>
                    <div><Link to="LoginPage">Already have an account? Login here</Link></div>
                </div>
            </div>
        )
    }
}