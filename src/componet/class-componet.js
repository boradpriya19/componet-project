import React, { Component } from "react";
import Child from "./child";
import './class.css'

class Userpage extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      email:"",
      DOB:"",
      phoneno:"",
      address:"",
      gender:"",
      check:"",
    };
  }

  handleChange(event) {
    console.log(`====>>`, event.Name);
    this.setState({ ...this.state, [event.Name]: event.value });
  }

  handleChange(event){
    console.log(`====>> `,event.email);
    this.setState({...this.state,[event.email]:ev})
  }

  render() {
    return (
      <>
        {/* from-design */}

        <div className="from">
            <div className="input-name">
                Name<input name="name"
                value={this.state.Name}
                onChange={(event)=>{this.handleChange(event.target)}}  type="text"></input> 
            </div>
            
 
             <div className="input-email">
                Email<input name="email" 
                  value={this.state.email}
                   type="email"
                   onChange={(event)=>{this.handleChange(event.target)}}></input>
            </div>

            <div className="input-DOB">
                DOB<input name="DOB" type="date"></input>
            </div>

            <div className="input-phone">
                PhoneNo:<input type="number" name="phoneno"></input>
            </div>

            <div className="input-address">
                Address:<input name="address" type="text"></input>
            </div>

            <div className="input-gender">gender:
                Male<input name="gender" type="radio"></input>
                Female<input name="gender" type="radio"></input>
                Other<input name="gender" type="radio"></input>
            </div>

            <div className="input-check">
                std<input type="checkbox" name="check"></input>
                Job<input type="checkbox" name="check"></input>
            </div>

            <div className="btn">
                <button>Submit</button>
            </div>
        </div>

        {/* 
                name <input type='text' 
                name='userName'
                 value={this.state.userName}
                  onChange={(e)=>this.handleChange(e.target)}>
                  </input> */}

        <Child Name={this.state.Name} email={this.state.email}/>
      </>
    );
  }
}

export default Userpage;
