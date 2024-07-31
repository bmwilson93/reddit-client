import React from 'react'

const Comment = ({ comment }) => {
  return (
    <li>
      <div className='comment-container'>

        <div className='comment-author-container'>
          <p>by: <span className="author-name">
              {comment.data.author}
            </span>
          </p>

          <div className='comment-votes votes'>
            <box-icon name='up-arrow-alt'></box-icon>
            {comment.data.ups}
            <box-icon name='down-arrow-alt' ></box-icon>
          </div>
        </div>

        <div className='comment-body'>
          <p>
            {comment.data.body}
          </p>
        </div>

      </div>
    </li>
  )
}

export default Comment