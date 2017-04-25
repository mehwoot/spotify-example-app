import React, { Component } from 'react'
import { connect } from 'react-redux'
import Homepage from './Homepage'
import Artist from './Artist'

class Body extends Component {
  render () {
    /* React-router would probably be a better long term choice */
    switch (this.props.route) {
      case 'artist':
        return <Artist />
      default:
      case 'homepage':
        return <Homepage />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

export default connect(mapStateToProps)(Body)
