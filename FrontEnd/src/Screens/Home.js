import React from "react";
import { Link } from 'react-router'
import HomeDesc from '../Components/HomePG'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HomePageDescription: '',
            HomePageName: '',
        };
    }

    componentWillMount() {
        fetch('http://localhost:3637/api/HomePages')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({
                    HomePageDescription: data[0].homeDesc,
                    HomePageName: data[0].homeName
                })
            });

    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.HomePageName}</h1>
                <hr />
                <h3>{this.state.HomePageDescription}</h3>
                <p>Thank you very much for visiting my website! If you're new here, you might want to visit the 
                    <Link to="RegistrationPage"> RegistrationPage </Link>,or if you already have an account, check out the 
                    <Link to="LoginPage"> Login Page </Link> </p>
                    <br />
                    <h6>What is MOVTracker?</h6>
                    <div className="container">
                        <p>Glad you asked! MOVTracker is a tool to help you keep track of Movies and Actors that you have a particular interest in.
                            This project is powered by every person that uses this website, so all we ask, is that you add your favorite actor or movie to the database.
                            <strong>Thank you for using MOVTracker and enjoy your stay :)</strong>
                             </p>
                    </div>
            </div>
        )
    }
}