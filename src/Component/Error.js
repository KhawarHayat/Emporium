
import React, { Component } from 'react';
class Error extends Component {
    render() {
        return (
           <>
           <center> <h2 style={{color: "red", fontSize: '200%', fontWeight:'800', height:'100%',}} >{this.props.error}</h2> </center>
           </> 
        );
    }
}

export default Error;