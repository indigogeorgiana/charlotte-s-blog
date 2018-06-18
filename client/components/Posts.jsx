import React from 'react'
import Post from './Post'
import submissions from '../../data/posts'

const Header = props => {
  return (
    <div className='posts'>
      <h2>Posts</h2>
      {
        submissions.map(submission => {
          return <Post
            key={submission.id}
            title={submission.title}
            date={submission.date}
            commentCount={submission.commentCount}
            paragraph={submission.paragraphs} />
        })
      }

    </div>

  )
}
export default Header
