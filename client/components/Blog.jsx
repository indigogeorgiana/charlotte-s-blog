const React = require('react')

function Blog (props) {
  return (
    <div className="otherBlogs">
      <a href="{props.link}"><p>{props.blogTitle}</p></a>
    </div>
  )
}

export default Blog
