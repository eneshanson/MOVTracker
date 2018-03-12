import React from 'react';


export default class HomeDesc extends React.Component {
    
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
                this.setState({ HomePageDescription: data[0].homeDesc,
                HomePageName: data[0].homeName })
            });
            
    }
    render() {
        return (
            <div>
                <h1>{this.state.HomePageName}</h1>
                <p>{this.state.HomePageDescription}</p>
            </div>
        )
    }
}