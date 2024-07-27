// URL Builder
// Constructs a request url for the reddit.json API

const urlBuilder = (search, category) => {

  let url = 'https://www.reddit.com/';
  if (category.length > 0) url += `r/${category}/`;
  if (search.length > 0) {
    url += `search/.json?q=${search}`;
  } else url += '.json'
;  

  return url;

}

export default urlBuilder;

// https://www.reddit.com/r/gaming/search/?q=pokemon