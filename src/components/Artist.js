import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultBox from './ResultBox'
import { Grid, Row } from 'react-bootstrap'
import { showHomepage } from '../store/actions'
import TrackSearch from './search/TrackSearch'
import _ from 'lodash'

class Artist extends Component {
  render () {
    const tracks = this.props.tracks.map((track, i) => {
      return <ResultBox title={`${track.name} - ${track.duration}`} image={track.image} key={i} />
    })
    return (
      <Grid>
        <Row>
          <h1>{this.props.name}</h1>
        </Row>
        <Row>
          <a href="#" id="back" onClick={this.props.backClicked}>Back to artists</a>
        </Row>
        <Row>
          <TrackSearch artistName={this.props.name} placeholder="Search artist's tracks..." />
        </Row>
        <Row>
          {tracks}
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    name: state.artists[0].name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backClicked: (e) => {
      e.preventDefault()
      dispatch(showHomepage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
