const fetchPosts = async (search = "", category = "") => {
  // build out the url for the request with the search and category
  // let url = 'https://www.reddit.com/r/pokemon/.json';

  let url = 'https://www.reddit.com/';
  if (category.length > 0) url += `r/${category}/`;
  url += '.json';
  if (search.length > 0) url += `>?q=${search}`;


  // make the request in a try/catch
  try {
    let result = await fetch(url);
    console.log(result);
    let data = await result.json();
    console.log(data)

    return(data.data.children)
    // return [];
    // TESTING
    // return [{name: 'steve', fun: yes}, {name: rick, fun: no}];
  } catch (err) {
    console.log(" error and stuff! " + err);
    return [];
  }
}

// fetchPosts();

export default fetchPosts;