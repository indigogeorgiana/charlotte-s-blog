import React from 'react'

const Post = props => {
  return (
    <div className ='post'>
      <h3>{props.title}</h3>
      <h5>{props.date}</h5>
      <p>{props.paragraphs}</p>
    </div>
  )
}
export default Post
