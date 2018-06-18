import React from 'react'

const OtherBlog = props => {
  return (
    <a href={props.blogs.link}>{props.blogs.blogTitle}</a>
  )
}
export default OtherBlog
