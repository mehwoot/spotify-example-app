import { RECEIVE_ARTISTS, RECEIVE_ARTIST, SHOW_HOMEPAGE } from '../actions'
import _ from 'lodash'
const initialState = 'homepage'

function route(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ARTIST:
      return 'artist'
    case SHOW_HOMEPAGE:
    case RECEIVE_ARTISTS:
      return 'homepage'
    default:
      return state
  }
}

export default route
