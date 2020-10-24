import React from "react";
import '../assets/css/main.css';

export class MenuItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <p id={"menuItem"}>{this.props.name}</p>
    );
  }
}