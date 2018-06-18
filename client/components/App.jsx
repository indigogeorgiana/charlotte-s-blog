import React from 'react'
import head from '../../data/header.js'
import Header from './Header.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import blogs from '../../data/other-blogs.js'

const App = () => (
  <div className='container'>
    <Header head = {head} />
    <OtherBlogs blogs = {blogs}/>
  </div>
)

export default App
