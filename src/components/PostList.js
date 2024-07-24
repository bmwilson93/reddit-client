import React from 'react'

import data from '../utils/mockData.js'

const PostList = () => {

  console.log(data);
  
  //get the data from the store
  // const currentPosts = useSelector(state => state.post.posts)

  return (
    <div>
      <ul>
        {data.map(post => {
          return (
          <li key={post.data.id}>
            
            <h3>{post.data.title}</h3>
            {post.data.thumbnail != "self" ? (<img src={post.data.thumbnail} />) : <></>}

          </li>
        )
        })}
      </ul>
    </div>
  )
}

export default PostList