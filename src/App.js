import './styles/App.css';
import { useEffect } from "react";
import SearchBar from "./components/SearchBar.js";
import Categories from "./components/Categories.js";
import { useNavigate, useLocation } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  // function that retrives the posts and updates them in the redux store
  const getData = async () => {
    console.log(currentCategory)
    const data = await fetchPosts(currentSearch, currentCategory);
    dispatch(updatePosts(data));
    navigate('/');
  }

  // get the reddit posts data with useEffect on load, save it to redux store
  // !!! currently getting from mockData, change to fetchPosts util after testing !!!
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log('Location changed');
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className="App">
      <header>
        <h1>Mineddit</h1>
        <SearchBar getData={getData}/>
        <div></div>
      </header>

      <main>
        <div className='category-container'>
          <Categories getData={getData}/>
        </div>

        <section>
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </section>

      </main>

    </div>
  );
}

export default App;
