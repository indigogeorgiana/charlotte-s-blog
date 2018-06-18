import React from 'react'

const Blogs = props => {
  return (
    <div>
      <span>{props.id}</span><br/>
      <span>{props.blogTitle}</span><br/>
      <span>{props.link}</span><br/>
    </div>
  )
}

const blogTemplate = (props) => {
  return (
    <div className='blog-temp'>
      {
        blogs.map(blog => {
          return <Blogs
            key={blog.id}
            blogTitle={blog.blogTitle}
            link={blog.link}/>
        })
      }
    </div>
  )
}

export default blogTemplate

const blogs = [
  {
    id: 1,
    blogTitle: 'Wilber',
    link: 'https://wilber.net/blog'
  },
  {
    id: 2,
    blogTitle: 'Templeton',
    link: 'https://templeton.net/blog'
  },
  {
    id: 3,
    blogTitle: 'John Arable',
    link: 'https://john-arable.net/blog'
  },
  {
    id: 4,
    blogTitle: 'Fern Arable',
    link: 'https://fern-arable.net/blog'
  },
  {
    id: 5,
    blogTitle: 'Homer Zuckerman',
    link: 'https://homer-zuckerman.net/blog'
  },
  {
    id: 6,
    blogTitle: 'Old Sheep',
    link: 'https://old-sheep.net/blog'
  },
  {
    id: 7,
    blogTitle: 'Dr. Dorian',
    link: 'https://dr-dorian.net/blog'
  },
  {
    id: 8,
    blogTitle: 'Uncle',
    link: 'https://uncle.net/blog'
  }
]
