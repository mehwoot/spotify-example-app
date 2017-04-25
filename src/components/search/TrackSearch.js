import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchForTracks } from '../../store/actions'
import Search from './index'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      return searchForTracks(dispatch, value, ownProps.artistName)
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
