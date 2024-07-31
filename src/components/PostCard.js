import { useNavigate } from "react-router-dom";
import imgRegex from "../utils/imgRegex"

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <li 
      key={post.data.id}
      onClick={() => navigate(`/post/${post.data.id}`, {state:{postData: post}})}
    >


      <div className="post-card">

        <div className="post-title">
          <h3>{post.data.title}</h3>
        </div>

        {/* If url ends with .jpg/.png/.gif => display the image, 
            else if selftext is not empty => display the text */}
        <div className="post-image">
          {imgRegex.test(post.data.url) 
          ? (<img src={post.data.url} alt="" className="card-image"/>) 
          : post.data.selftext.length > 0 
            ? <p className='post-text'>{post.data.selftext}</p> 
            : <></>}
        </div>

        <div className='post-footer'>

          <div className="author">
            <p>by: <span className="author-name">
                {post.data.author_fullname}
              </span>
            </p>

          </div>
          
          <div className="votes">
            <box-icon name='up-arrow-alt' color="#ff5c33"></box-icon>
            {post.data.ups}
            <box-icon name='down-arrow-alt' color="#1a8cff"></box-icon>
          </div>

          <div className="comment">
            {post.data["num_comments"]}
            <box-icon name='comment' ></box-icon>
          </div>
        </div> 

      </div>

    </li>
  )
}

export default PostCard