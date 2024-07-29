import './App.css';
import { useEffect } from "react";
import SearchBar from "./components/SearchBar.js";

import { Routes, Route } from 'react-router-dom';

// Post Stuff Imports
import fetchPosts from "./utils/fetchPosts.js";

// Redux Imports 
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updatePosts } from './slices/postSlice'; // the refucer function from the slice


// Page imports
import Home from './pages/Home';
import Post from "./pages/Post";

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
      <header>
        <h1 className="title">Mineddit</h1>
        <SearchBar getData={getData}/>
        <div></div>
      </header>

      

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/post/:id' element={<Post />} />
      </Routes>

    </div>
  );
}

export default App;
