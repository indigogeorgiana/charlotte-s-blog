import React from 'react'

const Post = props => {
  return (
    <div className='post-submit'>
      <div className='post-date'>
        {props.date}
      </div>
      <div className='post-title'>
        {props.title}
      </div>
      <div className='post-paragraph'>
        {props.paragraph}
      </div>
    </div>

  )
}
export default Post
