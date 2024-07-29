import React from 'react'
import Button from 'react-bootstrap/Button';

// Redux Imports 
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updateSearch } from '../slices/postSlice'; // the refucer function from the slice

const SearchBar = ({ getData }) => {
  const currentSearch = useSelector(state => state.post.search);
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  return (
    <div className="searchbar-container">
      <form onSubmit={(e) => {
          e.preventDefault();
          getData();
          }
        }
      >
        <input type="text"
          value={currentSearch}
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
        <Button variant="success" size="lg" onClick={getData}>Search Posts</Button>
      </form>
      {/* <p>{currentSearch}</p> */}
    </div>
  )
}

export default SearchBar