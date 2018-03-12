import React from "react";
import { Link } from "react-router"

export default class Layout extends React.Component{
    render(){
      return(
        
          <div>
                <h1>Layout</h1>
                {this.props.children}
                <Link to="Archives">Archives</Link>
                <Link to="Settings"><button className ="btn btn-success">Settings</button></Link>

        </div>
        )
    }
  }