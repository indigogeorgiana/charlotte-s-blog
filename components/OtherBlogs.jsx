import React from 'react'
import blogs from '../data/otherblogs.js'
import OtherBlog from './OtherBlog.jsx'

const OtherBlogs = (props) => {
  return (
    <div className="blogs-container">
      <h2>Other Blogs</h2>
      <div className="blogs">
        {
          blogs.map( => {
            return <OtherBlog key={blogs.content.id} />
          })
        }
      </div>
    </div>
  )
}

export default OtherBlogs
