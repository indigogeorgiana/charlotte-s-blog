import React from 'react'

const Post = props => {
  return (
    <div className='post-subm'>
      <div className='post-title'>
        {props.title}
      </div>
      <div className='post-date'>
        {props.date}
      </div>
      <div className='post-comment'>
        {props.commentCount}
      </div>
      <div className='post-paragraph'>
        {props.paragraph}
      </div>
    </div>

  )
}
export default Post
