const React = require('react')

function Blog (props) {
  return (
    <div className="otherBlogs">
      <a href="{props.link}"><h4>{props.blogTitle}</h4></a>
    </div>
  )
}

export default Blog
