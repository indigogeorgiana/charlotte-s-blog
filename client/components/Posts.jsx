import React from 'react'
import Post from './Post'
import entries from '../../data/posts'

const Header = props => {
  return (
    <div className='posts'>
      <h2>Posts</h2>
      {
        entries.map(entry => {
          return <Post
            key={entry.id}
            title={entry.title}
            date={entry.date}
            commentCount={entry.commentCount}
            paragraph={entry.paragraphs} />
        })
      }

    </div>

  )
}
export default Header
