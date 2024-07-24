import React from 'react'
import { useSelector } from 'react-redux' // allows us to get data from the redux store
import PostModal from './PostModal.js';

const PostList = () => {

  let data = useSelector(state => state.post.posts);
  // console.log(data);

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