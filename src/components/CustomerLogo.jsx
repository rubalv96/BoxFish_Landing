import React from "react";
import '../assets/css/main.scss';

export class CustomerLogo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div >
        <img id="customerLogo" src={this.props.image} alt={"Customer logo image"}/>
      </div>
    );
  }
}