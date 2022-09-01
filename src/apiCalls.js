export const fetchData = async (query) => {
  return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": `https://tastedive.com/api/similar?k=435245-RecMe-OC5H7B67&info=1&q=${query}`,
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
      "Target-URL": `https://rest.bandsintown.com/artists/${name}/?app_id=24f4cd79b09e9f1532c301e21546d946`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error with fetching images");
    } else {
      return response.json();
    }
  });
};
