import React from 'react'
import categoryList from '../utils/categoryList'

import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updateCategory } from '../slices/postSlice'; // the reducer function from the slice

const Categories = () => {
  const currentCategory = useSelector(state => state.post.category);
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categoryList.map(category => {
          return (
            <li 
              className = {currentCategory === category ? "selected" : ""}
              onClick={() => {
                let cat = category;
                if (category === "No Category") cat = "";
                dispatch(updateCategory(cat))
              }}
            >
              {category}
            </li>
          )
        })}
      </ul>
      <p>Current Category{currentCategory}</p>
    </div>
  )
}

export default Categories