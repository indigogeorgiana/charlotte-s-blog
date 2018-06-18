import React from 'react'
import OtherBlog from './OtherBlog'
// data
import otherBlogsData from '../../data/other-blogs.js'

const OtherBlogs = props => {
  return (
    <div className ='otherBlogs'>
      {
        otherBlogsData.map(blog => {
          return <OtherBlog
            key={blog.id}
            blogTitle={blog.blogTitle}
            link={blog.link} />
        })
      }
    </div>
  )
}
export default OtherBlogs
