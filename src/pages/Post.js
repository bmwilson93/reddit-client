import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Comment from '../components/Comment';
import fetchComments from '../utils/fetchComments';
import imgRegex from '../utils/imgRegex';

// Redux Imports 
import { useSelector, useDispatch } from 'react-redux' // allows to interact with the store
import { updateComments } from '../slices/postSlice'; // the refucer function from the slice


const Post = () => {
  const location = useLocation();
  const postData  = location.state.postData;
  const dispatch = useDispatch()
  const currentComments = useSelector(state => state.post.comments);

  const getComments = async () => {
    const data = await fetchComments(postData.data.permalink);
    dispatch(updateComments(data[1].data.children));
  }


  useEffect(() => {
    getComments();
  }, [])


  return (
    <div className="post-container">

      <h2 className='post-title'>{postData.data.title}</h2>

      {/* Self Text (only render if has text)*/}
      <div className="post-selftext">
        {postData.data.selftext != "" 
          ? (<p>
            {postData.data.selftext}
          </p>)
          : <></>
        }
      </div>

      {/* Image (only render if has image)*/}
      {imgRegex.test(postData.data.url) 
      ? (<img src={postData.data.url} alt="" className=""/>) 
      : <></>}

      <div className='comments-container'>
        {/* Map out the comments */}
        <ul>
          {currentComments.map(comment => {
            if (comment.kind == "t1") return (<Comment comment={comment} />)
          })}
        </ul>
      </div>
    </div>
  )
}

export default Post