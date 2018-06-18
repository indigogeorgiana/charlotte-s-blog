import React from 'react'

const OtherBlog = props => {
  return (
    <div className='blog'>
      <a href={props.link}>{props.title}</a>
    </div>
  )
}
export default OtherBlog
