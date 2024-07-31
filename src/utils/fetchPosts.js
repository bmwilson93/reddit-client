import urlBuilder from "./urlBuilder";

// Mock Data for testing while developing
// import { mockData } from './mockData.js'

const fetchPosts = async (search = "", category = "") => {
  let url = urlBuilder(search, category);

  // !!! REMOVE THIS LINE AFTER DEVELOPMENT
  // return mockData;
  // !!!
  
  // make the request in a try/catch
  try {
    let result = await fetch(url);
    // console.log(result);
    let data = await result.json();
    // console.log(data)

    return(data.data.children)
  } catch (err) {
    console.log(" error and stuff! " + err);
    return [];
  }
}

// fetchPosts();

export default fetchPosts;