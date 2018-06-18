const React = require('react')

function Post (props) {
  return (

    <div className='posts'>
      <h3>{props.title}</h3>
      <p className="postP">{props.date}</p>
      <p className="postP">Comments: {props.commentCount}</p>
      <p className="postParagraph">{props.paragraphs}</p>
    </div>
  )
}

export default Post
