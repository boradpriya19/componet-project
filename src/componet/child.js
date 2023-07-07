import React, { Component } from "react";

class Child extends Component{
    // constructor(props){
    //     super(props)
    // }


    render(){
        return(
            <>
            {/* <h1>{this.props.Name}</h1> */}
            name:-<h1>{this.props.Name}</h1>
            email:-<h1>{this.props.email}</h1>
            </>
        )
    }
    
}



export default Child