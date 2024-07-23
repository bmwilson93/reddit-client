const fetchPosts = async () => {
  let url = 'https://www.reddit.com/r/pokemon/.json';

  try {
    let result = await fetch(url);
    console.log(result);
    let data = await result.json();
    console.log(data)
  } catch (err) {
    console.log(" error and stuff! " + err);
  }
  // return data.data.children;
}

fetchPosts();

// export default fetchPosts;