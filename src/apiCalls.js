export const fetchData = (query) => {
  let fetchCall = fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&mbid&autocorrect[1]&api_key=0a27fdf86fe0d8df45f6ace9705dc9b7&format=json`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, I couldn't find that!");
    }
    return response.json();
  });
  return fetchCall;
};

export const fetchSimilar = (query) => {
  let fetchCall = fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=20&artist=${query}&api_key=0a27fdf86fe0d8df45f6ace9705dc9b7&format=json`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, I couldn't find that!");
    }
    return response.json();
  });
  return fetchCall;
};

export const fetchYouTube = async (query) => {
  let fetchCall = fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyAxSRbfilNBJO-7PQ5BXG6sZLcLSKuC0OQ&type=video`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, I couldn't find that!");
    }
    return response.json();
  });
  return fetchCall;
};

export const fetchImages = (query) => {
  let fetchCall = fetch(
    `https://rest.bandsintown.com/artists/${query}/?app_id=ab610b25dbd67b7388b4f4ae6803f7d6`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, I couldn't find that!");
    }
    return response.json();
  });
  return fetchCall;
};
