import React from "react";
import {CustomerLogo} from "./CustomerLogo";
import {ContactInfo} from "./ContactInfo";
import Logo from "../assets/images/path22.svg";
import '../assets/css/main.scss';
import {MenuItem} from "./MenuItem";
import fake1 from "../assets/images/fake1.png";
import fake2 from "../assets/images/fake2.png";
import fake3 from "../assets/images/fake3.png";
import fake4 from "../assets/images/fake4.png";
import fake5 from "../assets/images/fake5.png";
import fake6 from "../assets/images/fake6.png";
import {FooterMobile} from "./FooterMobile";
export class Footer extends React.Component {
  render(){

    return (
        <>
     <div id="customerContainer">
        <CustomerLogo
            image={fake1}
        />
        <CustomerLogo
            image={fake2}
        />
         <CustomerLogo
             image={fake3}
         />
         <CustomerLogo
             image={fake4}
         />
         <CustomerLogo
             image={fake5}
         />
         <CustomerLogo
             image={fake6}
         />

         </div>
            <FooterMobile/>




            </>

    );
  }
}