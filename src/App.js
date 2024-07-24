import { useEffect } from "react";
import './App.css';

// Post Stuff Imports
import PostList from './components/PostList.js';
import fetchPosts from "./utils/fetchPosts.js";

// Redux Imports 
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updatePosts } from './slices/postSlice'; // the refucer function from the slice

// !!! Add mock data to the store for now !!!
import mockData from './utils/mockData.js'


function App() {
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  // get the reddit posts data with useEffect on load, save it to redux store
  // !!! currently getting from mockData, change to fetchPosts util after testing !!!
  useEffect(() => {
    dispatch(updatePosts(mockData));
  }, [])
  

  return (
    <div className="App">

      <PostList />

    </div>
  );
}

export default App;
