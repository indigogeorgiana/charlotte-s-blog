import React from 'react'
import Header from './Header.jsx'
// import OtherBlog from './OtherBlog.jsx'
import OtherBlogs from './OtherBlogs.jsx'

// data
import head from '../../data/header'
// import blogTitle from '../../data/other-blogs'

const App = () => (
  <div className='container'>
    <Header head = {head} />
    <OtherBlogs />

  </div>

)

export default App
