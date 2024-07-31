import React from 'react'
import categoryList from '../utils/categoryList'

import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updateCategory } from '../slices/postSlice'; // the reducer function from the slice

const Categories = ({ getData }) => {
  const currentCategory = useSelector(state => state.post.category);
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  return (
    <>
      <h2>Subreddits</h2>
      <ul>
        {categoryList.map(category => {
          return (
            <li 
              className = {currentCategory === category ? "selected" :  ""}
              onClick={() => {
                let cat = category;
                if (category === "All") cat = "";
                dispatch(updateCategory(cat))
                // console.log(currentCategory)
                // getData()
              }}
            >
              {category}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Categories