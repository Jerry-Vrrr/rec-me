const tasteDiveKey = process.env.REACT_APP_TASTE_DIVE
const bandsInTownKey = process.env.REACT_APP_BANDS_IN_TOWN


export const fetchData = async (query) => {
  return fetch('http://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=${query}`
    }
  })
    .then(response => response.json())
}

export const fetchImages = async (name) => {
  return fetch('http://fe-cors-proxy.herokuapp.com', {
    headers: {
      'Target-URL': `https://rest.bandsintown.com/artists/${name}/?app_id=9249d4efca2fc99c7b6258541ce41a4f`
    }
  })
    .then(response => response.json())
}
