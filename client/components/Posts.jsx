import React from 'react'
import Post from './Post'

import postsdata from '../../data/posts'

const Posts = props => {
  return (
    <div className ='Posts'>
      {
        postsdata.map(blogposts => {
          return <Post
            key={blogposts.id}
            title={blogposts.title}
            date={blogposts.date}
            paragraphs={blogposts.paragraphs} />
        })
      }
    </div>
  )
}
export default Posts
