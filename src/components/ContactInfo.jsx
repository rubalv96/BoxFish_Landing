import React from "react";
import '../assets/css/main.scss';

export class ContactInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let id = "";
    if(this.props.mobile){
      id = "contactMobile";
    }
    else {
      this.props.type === "telephone" ? id = "tlfItem" : id = "mailItem";
    }

    return (
      <p id={id} style={{cursor: "pointer"}}>{this.props.text}</p>
    );
  }
}