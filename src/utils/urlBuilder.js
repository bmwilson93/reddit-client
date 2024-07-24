// URL Builder
// Constructs a request url for the reddit.json API

const urlBuilder = (search, category) => {

  let url = 'https://www.reddit.com/';
  if (category.length > 0) url += `r/${category}/`;
  url += '.json';
  if (search.length > 0) url += `?q=${search}`;

  return url;

}

export default urlBuilder;