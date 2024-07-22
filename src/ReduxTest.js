import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updatePosts } from './slices/postSlice'; // the refucer function from the slice

const ReduxTest = () => {
  const currentPosts = useSelector(state => state.post.posts) // needed to get the state data and stores it in currentPosts
  const dispatch = useDispatch() // binds the useDispatch function to just dispatch

  return (
    <div>
      <h1>Testing the Redux Store and Slice</h1>
      <div>
        <button onClick={() => dispatch(updatePosts(["thseti", "theise", "w8383"]))}></button>
        <button onClick={() => dispatch(updatePosts(["12312312", "4123", "64345"]))}></button>
        <div>
          <ul>
            {currentPosts.map((item) => {
              return (<li>{item}</li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReduxTest