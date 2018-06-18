import React from 'react'
import blogs from '../data/otherBlogs.js'

const Blogs = props => {
  return (
    <div>
      <span>{props.id}</span><br/>
      <span>{props.blogTitle}</span><br/>
      <span>{props.link}</span><br/>
    </div>
  )
}

const blogTemplate = (props) => {
  return (
    <div className='blog-temp'>
      {
        blogs.map(blog => {
          return <Blogs
            key={blog.id}
            blogTitle={blog.blogTitle}
            link={blog.link}/>
        })
      }
    </div>
  )
}

export default blogTemplate

