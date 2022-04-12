

export const fetchData = async (query) => {
  return fetch('http://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=${query}`
    }
  })
    .then(response => response.json())
}
