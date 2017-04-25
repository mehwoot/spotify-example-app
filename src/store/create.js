import { createStore, combineReducers } from 'redux'
import artists from './reducers/artists'
import tracks from './reducers/tracks'
import route from './reducers/route'

const reducer = combineReducers({
  artists,
  route,
  tracks
})

export default function () {
  return createStore(reducer)
}
