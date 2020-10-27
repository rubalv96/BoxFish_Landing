import React from "react";
import {ContactInfo} from "./ContactInfo";
import '../assets/css/main.scss';

export class ExtraHeader extends React.Component {
  render(){

    return (
      <div id={"extraHeader"}>

        <ContactInfo
          type= "mail"
          text="info@boxfish.studio"
          mobile
        />

        {/* Red circle between contact items*/}
        <svg style={{marginTop:"14.5px"}} height="5" width="5">
          <circle cx="2.5" cy="2.5" r="2.5" stroke="black" strokeWidth="0" fill="#FF5C5C" />
        </svg>

        <ContactInfo
          type= "telephone"
          text="+34 910 615212"
          mobile
        />

      </div>
    );
  }
}