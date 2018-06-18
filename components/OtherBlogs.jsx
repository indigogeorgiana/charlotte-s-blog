import React from 'react'
import otherBlogs from '../data/otherblogs.js'
import OtherBlog from './OtherBlog.jsx'

const OtherBlogs = props => {
  return (
    <div className='otherBlogs'>
      <h2>Other Blogs</h2>
      {
        otherBlogs.map(blog => {
          return <OtherBlog
            key={blog.id}
            title={blog.blogTitle}
            link={blog.link} />
        })
      }
    </div>
  )
}

export default OtherBlogs
