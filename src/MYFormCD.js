import React, { Component } from 'react'

export default class MYFormCD extends Component {

    state = {
        firstName : "",
        lastName : ""
    }

    mySubmit = (e)=> {

        e.preventDefault();

        console.log(this.state);
    }

    handler = (e)=> {

       let  {name,value} = e.target;

       this.setState({...this.state,[name]: value});
    }
  render() {
    return (
      <div>
        <form onSubmit={this.mySubmit}>

            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handler}/>
            <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handler}/>

            <input type="submit" value="Save" />

        </form>
      </div>
    )
  }
}
