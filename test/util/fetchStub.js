import { artists } from '../data/artists'
import { artistsSomething } from '../data/artistsSomething'
import { radicalSomething } from '../data/radicalSomething'
import { radicalSomethingTracks } from '../data/radicalSomethingTracks'

/* Stubs out window.fetch function to simulate API calls.  Long term a fancier
  solution using factories that lets individual tests specify data that should
  be returned would be more appropriate */
export default function fetchStub (url, options) {
  let result = {error: true}
  switch(url) {
    case 'https://api.spotify.com/v1/search?type=artist&q=something':
      result = artistsSomething
      break
    case 'https://api.spotify.com/v1/artists/2UohZ1T4H9BwBb5lYgZodI':
      result = radicalSomething
      break
    case 'https://api.spotify.com/v1/artists/2UohZ1T4H9BwBb5lYgZodI/top-tracks?country=au':
      result = radicalSomethingTracks
      break
    case 'https://api.spotify.com/v1/search?type=artist&q=a':
      result = artists
      break
  }

  return new Promise((done, error) => {
    done({
      json: () => new Promise((done, error) => {
        done(result)
      })
    })
  })
}
