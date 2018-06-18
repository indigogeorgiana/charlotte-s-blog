import React from 'react'
import posts from '../data/posts'

const Posts = props => {
  return (
    <div>
      <span> {props.id}</span> <br/>
      <span> {props.title}</span> <br/>
      <span> {props.date}</span><br/>
      <span> {props.commentCount}</span> <br/>
      <span> {props.paragraphs}</span> <br/>
    </div>
  )
}

const postTemplate = (props) => {
  return (
    <div className='post-temp'>
      {
        posts.map(post => {
          return <Posts
            key={post.id}
            title={post.title}
            date={post.date}
            commentCount={post.commentCount}
            paragraphs={post.paragraphs}/>
        })
      }
    </div>
  )
}

export default postTemplate
