import React from "react";
import '../assets/css/main.css';

export class ContactInfo extends React.Component {
    constructor(props){
        super(props);
    }



    render(){
        let id="";
        if(!this.props.mobile){
            {this.props.type === "telephone" ? id="tlfItem" : id="mailItem"}
        }
        if(this.props.mobile){
            id = "contactMobile";
        }


        return (
            <p id={id}>{this.props.text}</p>

        );
    }
}