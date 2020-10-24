import React from "react";
import '../assets/css/main.css';
import fake1 from "../assets/images/fake1.png";

export class CustomerLogo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div id="customerLogo">
          <img src={this.props.image}/>
        </div>
    );
  }
}