import React from 'react';
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme';
import run from '../src/run'
import createStore from '../src/store/create'
import ReactDOM from 'react-dom'
import Body from '../src/components/Body'
import { Provider } from 'react-redux'
import { searchForArtists } from '../src/store/actions'
import ReactTestUtils from 'react-dom/test-utils'
import sleep from 'sleep-promise'

describe("Spotify Example App", function() {

  let store, page

  before(async function () {
    store = createStore()
    page = mount(
      <Provider store={store}>
        <Body />
      </Provider>
    )
    await searchForArtists(store.dispatch, 'a')
  })

  context('Homepage', function () {
    it("Displays artists for default sample search", function() {
      expect(page.find('div.result-box').length).to.eq(20)
    })

    it("Displays artist names", function() {
      expect(page.find('div.result-box').at(0).text()).to.contain('A Boogie Wit da Hoodie')
      expect(page.find('div.result-box').at(2).text()).to.contain('System Of A Down')
    })

    it("Searches for artists when text is entered in search bar", async function() {
      let artistInput = page.find('input').get(0)
      artistInput.value = 'something'
      ReactTestUtils.Simulate.change(artistInput)
      await sleep(350)

      expect(page.find('div.result-box').at(0).text()).to.contain('Something Corporate')
      expect(page.find('div.result-box').at(2).text()).to.contain('Radical Something')
    })

    it('Goes to the artists page when an artist is clicked', async function () {
      page.find('div.result-box').at(2).simulate('click')
      await sleep(350)

      expect(page.find('h1').text()).to.contain('Radical Something')
    })
  })

  context('Artist Page', function () {
    it('Shows the artists tracks on the artist page', async function () {
      expect(page.find('div.result-box').at(0).text()).to.contain('Be Easy (feat. Kinetics)')
      expect(page.find('div.result-box').at(2).text()).to.contain('Paradise in You')
    })

    it('Displays track duration', async function () {
      expect(page.find('div.result-box').at(0).text()).to.contain('3:40')
      expect(page.find('div.result-box').at(2).text()).to.contain('3:00')
    })

    it('Returns to the homepage when back button clicked', function() {
      page.find('a#back').at(0).simulate('click')

      expect(page.find('h1').text()).to.contain('Spotify Artists')
      expect(page.find('div.result-box').at(0).text()).to.contain('Something Corporate')
      expect(page.find('div.result-box').at(2).text()).to.contain('Radical Something')
    })
  })

});
