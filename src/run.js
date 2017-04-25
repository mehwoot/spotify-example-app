import _ from 'lodash';
import createStore from './store/create'
import ReactDOM from 'react-dom'
import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import { searchForArtists } from './store/actions'

export default function run () {
  const store = createStore()
  const component = (
    <Provider store={store}>
      <Body />
    </Provider>
  )

  ReactDOM.render(component, document.getElementById('app'))
  searchForArtists(store.dispatch, 'a')
}
