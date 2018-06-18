const React = require('react')

function Posts (props) {
  return (

    <div className='posts'>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.date}</p>
      <p>{props.commentCount}</p>
      <p>{props.paragraphs}</p>
    </div>
  )
}

export default Posts
