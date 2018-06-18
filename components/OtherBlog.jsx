import React from 'react'
import blogs from '../data/otherblogs.js'

const OtherBlog = (props) => {
  return (
    <div className='blogpost'>
      <h4>{blogs.blogTitle}</h4>
      <p>{blogs.link}</p>
    </div>
  )
}

export default OtherBlog
