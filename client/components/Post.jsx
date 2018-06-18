const React = require('react')

function Post (props) {
  return (

    <div className='posts'>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>Comments: {props.commentCount}</p>
      <p>{props.paragraphs}</p>
    </div>
  )
}

export default Post
