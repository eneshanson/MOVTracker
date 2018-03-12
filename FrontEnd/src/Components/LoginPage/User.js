import React from 'react'

export default class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserName: '',
            PassWord: ''}
    }
    componentWillMount() {
       
        fetch('http://localhost:3637/api/Users')
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data)
                this.setState({ UserName: data[0].username,
                PassWord: data[0].passWor })
            });
    }
    render(){
        return(
            <div>
            <h1>{this.state.UserName}</h1>
            </div>
        )
    }
}