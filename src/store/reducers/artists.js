import { RECEIVE_ARTISTS, RECEIVE_ARTIST, SHOW_HOMEPAGE } from '../actions'
import _ from 'lodash'
const initialState = []

function spawnArtist(spotifyArtist) {
  let image = _.get(spotifyArtist, 'images[0].url', 'http://placehold.it/250x250')
  return Object.assign(spotifyArtist, {image})
}

function artists(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ARTIST:
      /* Set the first artist to be the new one, but keep the others so we can
        return to the homepage without re-fetching the artists
        Alternate method is to have separate state for "artist" vs "artists", but
        risks fragmenting the state in ways that aren't really logical */
      return [spawnArtist(action.data), ...state]
    case RECEIVE_ARTISTS:
      return _.get(action, 'data.artists.items', []).map(spawnArtist)
    case SHOW_HOMEPAGE:
      return state.slice(1)
    default:
      return state
  }
}

export default artists
