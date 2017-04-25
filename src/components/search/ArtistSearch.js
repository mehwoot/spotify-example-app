import React from 'react'
import { connect } from 'react-redux'
import { searchForArtists } from '../../store/actions'
import Search from './index'

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      return searchForArtists(dispatch,value)
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
