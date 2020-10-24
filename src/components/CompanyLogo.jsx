import React from "react";
import '../assets/css/main.css';

export class CompanyLogo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="containerLogo">
        <img id="logoImg" src={this.props.imgSrc}/>
          <div >
              <p id="titleLogo">{this.props.title}</p>
              <p id="subtitleLogo">{this.props.subtitle}</p>
          </div>

      </div>

    );
  }
}