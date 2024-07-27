import { useEffect } from "react";
import './App.css';
import SearchBar from "./components/SearchBar.js";
import Categories from "./components/Categories.js";

// Post Stuff Imports
import PostList from './components/PostList.js';
import fetchPosts from "./utils/fetchPosts.js";

// Redux Imports 
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updatePosts } from './slices/postSlice'; // the refucer function from the slice

// !!! Add mock data to the store for now !!!
// import mockData from './utils/mockData.js'


function App() {
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch
  const currentSearch = useSelector(state => state.post.search);
  const currentCategory = useSelector(state => state.post.category);

  // function that retrives the posts and updates them in the redux store
  const getData = async () => {
    const data = await fetchPosts(currentSearch, currentCategory);
    dispatch(updatePosts(data));
  }

  // get the reddit posts data with useEffect on load, save it to redux store
  // !!! currently getting from mockData, change to fetchPosts util after testing !!!
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <Categories />
      <SearchBar getData={getData}/>
      <PostList />

    </div>
  );
}

export default App;
