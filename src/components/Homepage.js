import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultBox from './ResultBox'
import { Grid, Row } from 'react-bootstrap'
import { loadArtist, loadTracks } from '../store/actions'
import ArtistSearch from './search/ArtistSearch'

class Homepage extends Component {
  render () {
    const artists = this.props.artists.map((artist, i) => {
      return <ResultBox title={artist.name} image={artist.image} key={i} onClick={this.props.loadArtist(artist.id)} />
    })
    return (
      <Grid>
        <Row>
          <h1>Spotify Artists</h1>
        </Row>
        <Row>
          <ArtistSearch placeholder="Search artists..."/>
        </Row>
        <Row>
          {artists}
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtist: (artistId) => {
      return () => {
        loadArtist(dispatch, artistId)
        loadTracks(dispatch, artistId)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
