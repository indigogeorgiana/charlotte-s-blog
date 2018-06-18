import React from 'react'
import head from '../../data/header.js'
import Header from './Header.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import blogs from '../../data/other-blogs.js'
import Posts from './Posts.jsx'
import post from '../../data/posts'

const App = () => (
  <div className='container'>
    <Header head = {head} />
    <OtherBlogs blogs = {blogs}/>
    <Posts post = {post} />
  </div>
)

export default App
