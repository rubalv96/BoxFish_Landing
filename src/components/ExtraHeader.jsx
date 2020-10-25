import React from "react";
import {CompanyLogo} from "./CompanyLogo";
import {ContactInfo} from "./ContactInfo";
import Logo from "../assets/images/path22.svg";
import '../assets/css/main.css';
import {MenuItem} from "./MenuItem";

export class ExtraHeader extends React.Component {
  render(){

    return (
      <div id={"extraHeader"}>

        <ContactInfo
          type= "mail"
          text="info@boxfish.studio"
          mobile={true}
        />
          <svg style={{marginTop: "14.5px"}} height="5" width="5">
              <circle cx="2.5" cy="2.5" r="2.5" stroke="black" stroke-width="0" fill="#FF5C5C" />
          </svg>
        <ContactInfo
          type= "telephone"
          text="+34 910 615212"
          mobile={true}
        />


      </div>
    );
  }
}