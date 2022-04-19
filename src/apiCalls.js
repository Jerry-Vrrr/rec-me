export const fetchData = async (query) => {
  return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": `https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=${query}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error with fetching artists");
    } else {
      return response.json();
    }
  });
};

export const fetchImages = async (name) => {
  return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": `https://rest.bandsintown.com/artists/${name}/?app_id=9249d4efca2fc99c7b6258541ce41a4f`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error with fetching images");
    } else {
      return response.json();
    }
  });
};
