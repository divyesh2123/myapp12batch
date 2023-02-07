import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class AlbumsC extends Component {
 

  render() {
    return (
      <div>{this.props.userId} {this.props.title}</div>
    )
  }
}
