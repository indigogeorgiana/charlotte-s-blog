import React from 'react'
import OtherBlog from './OtherBlog.jsx'

const OtherBlogs = props => {
  return (
    <div className='otherBlogs'>
      <h2>Other Blogs</h2>
      <div className='blog'>
        {
          OtherBlog.map(blog => {
            return <OtherBlog
              key={props.blogs.blogTitle}
              title={props.blogs.blogTitle}
              link={props.blogs.link} />
          })
        }
      </div>
    </div>
  )
}
export default OtherBlogs
