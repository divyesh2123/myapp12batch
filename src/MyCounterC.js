import axios from 'axios';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AlbumsC from './AlbumsC';

export default class MyCounterC extends Component {
 
    state = {
        counter : 1,
        data : []

    }

        constructor()
        {
            super();
            this.mycounter = this.mycounter.bind(this);

        }



       mycounter = function() {
        this.setState({...this.state,counter: this.state.counter+1})
     }

     componentDidMount()
     {
        axios.get("https://jsonplaceholder.typicode.com/albums").
        then(y=> {

            this.setState({...this.state,data: y.data})

        })

     }

    // mycounter = ()=> {

    // this.setState({...this.state,counter: this.state.counter+1})
    // }

  render() {
    return (
      <div>{this.state.counter}
      
        <button onClick={this.mycounter}>Counter</button>
        {
            this.state.data.map((value,index)=> {

                return(<div><AlbumsC userId={value.userId} title={value.title}></AlbumsC> </div>)
            })

        }
     
      </div>
    )
  }
}
