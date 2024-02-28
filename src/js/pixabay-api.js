const KEY = '42555164-0de9ae952fe9eb05e418ffbde';

export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
}
