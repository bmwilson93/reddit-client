import React from 'react'

import data from '../utils/mockData.js'

import PostModal from './PostModal.js';

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

            <PostModal title={post.data.title} imgUrl={post.data.thumbnail} ups={post.data.ups} downs={post.data.downs} selfText={post.data.selftext} />

          </li>
        )
        })}
      </ul>
    </div>
  )
}

export default PostList