import { RECEIVE_TRACKS } from '../actions'
import _ from 'lodash'

const initialState = []

function spawnTrack (spotifyTrack) {
  let image = _.get(spotifyTrack, 'album.images[0].url', 'http://placehold.it/250x250')
  let durationMinutes = parseInt(spotifyTrack.duration_ms / (1000 * 60))
  let durationSeconds = parseInt(spotifyTrack.duration_ms / 1000) % 60
  let duration = `${durationMinutes}:${durationSeconds < 10 ? 0 : ''}${durationSeconds}`
  return Object.assign(spotifyTrack, {image, duration})
}

function artists(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.data.map(spawnTrack)
    default:
      return state
  }
}

export default artists
