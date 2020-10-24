import React from "react";
import '../assets/css/main.css';

export class ContactItem extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
   let typeOfContact;
    {this.props.type === "telephone" ? typeOfContact="tlfItem" : typeOfContact="mailItem"}
    return (
      <p id={typeOfContact}>{this.props.text}</p>

    );
  }
}