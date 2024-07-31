// Mock Data for testing while developing
// import mockPostData from './mockData.js'

const fetchComments = async (postURL) => {
  let url = `https://www.reddit.com${postURL}.json`;

  // !!! REMOVE THIS LINE AFTER DEVELOPMENT
  // return mockPostData;
  // !!!
  
  // make the request in a try/catch
  try {
    let result = await fetch(url);
    // console.log(result);
    let data = await result.json();
    // console.log(data)

    return(data)
  } catch (err) {
    console.log(" error and stuff! " + err);
    return [];
  }
}

// fetchPosts();

export default fetchComments;