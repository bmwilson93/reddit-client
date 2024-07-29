import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Post = () => {
  const location = useLocation();
  const postData  = location.state.postData;
  const navigate = useNavigate();

  return (
    <div className="post-container">{postData.data.selftext}</div>
  )
}

export default Post