import React from "react";
import {CompanyLogo} from "./CompanyLogo";
import {ContactInfo} from "./ContactInfo";
import Logo from "../assets/images/path22.svg";
import '../assets/css/main.scss';
import {MenuItem} from "./MenuItem";

export class DarkModeToggle extends React.Component {
  render(){

    return (
      <div className="toggleWrapper">
        <input onClick={()=>{this.props.toggleFunction();}} type="checkbox" className="dn" id="dn"/>
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1" />
            <span className="crater crater--2" />
            <span className="crater crater--3" />
          </span>
          <span className="star star--1" />
          <span className="star star--2" />
          <span className="star star--3" />
          <span className="star star--4" />
          <span className="star star--5" />
          <span className="star star--6" />
        </label>
      </div>
    );
  }
}