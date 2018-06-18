import React from 'react'

const OtherBlog = props => {
  return (
    <div className ='otherBlog'>
      <a href={props.link}><h4>{props.blogTitle}</h4></a>
    </div>
  )
}
export default OtherBlog
