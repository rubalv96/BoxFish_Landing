import React from "react";
import '../assets/css/main.scss';

export class CompanyLogo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="containerLogo">
        <img id="logoImg" src={this.props.imgSrc} alt={"Logo BoxFish"}/>
        <div >
          <p id="titleLogo">{this.props.title}</p>
          <p id="subtitleLogo">{this.props.subtitle}</p>
        </div>
      </div>

    );
  }
}