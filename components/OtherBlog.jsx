import React from 'react'
// import blogs from '../data/otherblogs.js'

const OtherBlog = (props) => {
  return (
    <div className='blogpost'>
      <a href={props.link}>{props.blogTitle}</a>
    </div>
  )
}

export default OtherBlog
