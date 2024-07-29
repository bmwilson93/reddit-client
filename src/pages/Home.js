import React from 'react'
import Categories from "../components/Categories.js";
import PostList from '../components/PostList.js';

const Home = () => {
  return (
    <div className='body-container'>

        <div className='category-container'>
          <Categories />
        </div>

        <div className='content-container'>

          <PostList />
        </div>

      </div>
  )
}

export default Home