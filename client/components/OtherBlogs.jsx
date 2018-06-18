import React from 'react'
import OtherBlog from './OtherBlog.jsx'
import otherBlogs from '../../data/other-blogs'

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
