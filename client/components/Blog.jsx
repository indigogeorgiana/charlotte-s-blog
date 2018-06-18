const React = require('react')

function Blog (props) {
  return (
    <div className="otherBlogs">
      <li className="spiderBullet"><a href="{props.link}">{props.blogTitle}</a></li>
    </div>
  )
}

export default Blog
