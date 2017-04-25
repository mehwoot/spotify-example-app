export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'
export const SHOW_HOMEPAGE = 'SHOW_HOMEPAGE'

export const receiveArtists = (data) => {
  return {
    type: RECEIVE_ARTISTS,
    data: data
  }
}

export const receiveArtist = (data) => {
  return {
    type: RECEIVE_ARTIST,
    data: data
  }
}

export const receiveTracks = (data) => {
  return {
    type: RECEIVE_TRACKS,
    data: data
  }
}

export const showHomepage = () => {
  return {
    type: SHOW_HOMEPAGE
  }
}

/* Needs a fetch polyfill for old browser compatibility */
export async function searchForArtists(dispatch, query) {
  let result = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(query)}`)
  let json = await result.json()
  dispatch(receiveArtists(json))
}

export async function searchForTracks(dispatch, query, artistName) {
  let result = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)} artist:${encodeURIComponent(artistName)}`)
  let json = await result.json()
  dispatch(receiveTracks(json.tracks.items))
}

export async function loadArtist(dispatch, artistId) {
  let result = await fetch(`https://api.spotify.com/v1/artists/${artistId}`)
  dispatch(receiveArtist(await result.json()))
}

export async function loadTracks(dispatch, artistId) {
  let result = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=au`)
  dispatch(receiveTracks((await result.json()).tracks))
}
