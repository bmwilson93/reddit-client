import React from 'react'
import { useSelector } from 'react-redux' // allows us to get data from the redux store
import PostCard from './PostCard';
import 'boxicons';

const PostList = () => {

  let data = useSelector(state => state.post.posts);
  
  return (
    <div className='postlist-container'>
      <ul>
        {/* Map out a list of the the posts */}
        {data.map(post => {
          return (<PostCard post={post} />)
        })}
      </ul>
    </div>
  )
}

export default PostList