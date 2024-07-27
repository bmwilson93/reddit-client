import React from 'react'
import categoryList from '../utils/categoryList'

import { useSelector, useDispatch, useStore } from 'react-redux' // allows to interact with the store
import { updateCategory } from '../slices/postSlice'; // the refucer function from the slice

const Categories = () => {
  const currentCategory = useSelector(state => state.post.category);
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  // console.log(useStore());

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categoryList.map(category => {
          return (
            <li onClick={() => dispatch(updateCategory(category))}>
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