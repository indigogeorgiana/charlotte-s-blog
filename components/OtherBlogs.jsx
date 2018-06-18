import React from 'react'

const OtherBlogs = (props) => {
  const pBlogs = props.blogs
  return (
    <div className="blogs-container">
      <h2>Other Blogs</h2>
      <div className="blogs">
        <ul> {
          pBlogs.map(pBlogs => {
            <li key={pBlogs.id}>
              <h4>{pBlogs.blogTitle}</h4>
              <p>{pBlogs.link}</p>
            </li>
          })
        }  </ul>
      </div>
    </div>
  )
}

export default OtherBlogs
