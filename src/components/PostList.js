import React from 'react'
import { useSelector } from 'react-redux' // allows us to get data from the redux store
import { Card } from 'react-bootstrap';
import PostModal from './PostModal.js';
import { BoxIconElement } from 'boxicons';
import { useNavigate } from 'react-router-dom';

const PostList = () => {

  let data = useSelector(state => state.post.posts);
  let regex = new RegExp('/^https?://./..(png|gif|webp|jpeg|jpg)??.*$/gmi');
  let regex2 = new RegExp('\.jpg|\.png|\.gif|\.jpeg$')
  // console.log(data);

  console.log(regex2.test('ththoes.png'));

  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {data.map(post => {
          return (
          <li 
            key={post.data.id}
            onClick={() => navigate(`/post/${post.data.id}`, {state:{postData: post}})}
          >


            <div className="post-card">

              <div className="post-title">
                <h3>{post.data.title}</h3>
              </div>

              <div className="post-image">
                {regex2.test(post.data.url) ? (<img src={post.data.url} alt="" className="card-image"/>) : <></>}
              </div>
              {/* <box-icon name="rocket"></box-icon> */}

              <div className='post-footer'>

                <div className="author">
                  <p>by: 
                    <span className="author-name">
                      {post.data.author_fullname}
                    </span>
                  </p>

                </div>
                
                <div className="votes">
                  <box-icon name='up-arrow-alt'></box-icon>
                  {post.data.ups}
                  <box-icon name='down-arrow-alt' ></box-icon>
                </div>

                <div className="comment">
                <box-icon name='comment' ></box-icon>
                </div>
              </div> 

            </div>

          </li>
        )
        })}
      </ul>
    </div>
  )
}

export default PostList