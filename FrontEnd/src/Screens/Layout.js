import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Components/navbar'
import HomeDesc from '../Components/HomePG'
import Login from '../Components/LoginPage/Login'
import UserName from '../Components/LoginPage/User'

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div >
                <Navbar />
                {this.props.children}
            </div>);
    }
}