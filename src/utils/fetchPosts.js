import urlBuilder from "./urlBuilder";

const fetchPosts = async (search = "", category = "") => {
  let url = urlBuilder(search, category);
  
  // make the request in a try/catch
  try {
    let result = await fetch(url);
    console.log(result);
    let data = await result.json();
    console.log(data)

    return(data.data.children)
  } catch (err) {
    console.log(" error and stuff! " + err);
    return [];
  }
}

// fetchPosts();

export default fetchPosts;